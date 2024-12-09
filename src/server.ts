import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine, isMainModule } from '@angular/ssr/node';
import express from 'express';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import bootstrap from './main.server';

import '@shopify/shopify-api/adapters/node';
import { shopifyApi, LATEST_API_VERSION, Shopify } from '@shopify/shopify-api';

console.log('Initializing shopify...');
const shopify = shopifyApi({
    apiKey: process.env['STOREFRONT_PUBLIC_KEY']!,
    apiSecretKey: process.env['STOREFRONT_PRIVATE_KEY']!,
    adminApiAccessToken: process.env['SHOPIFY_ADMIN_TOKEN']!,

    scopes: ['read_products'],
    hostName: 'ngrok-tunnel-address',
    apiVersion: LATEST_API_VERSION,
    isEmbeddedApp: true,

    isTesting: true, // todo
});

shopify.auth
    .begin({
        shop: shopify.utils.sanitizeShop('stochastic-omen', true)!,
        callbackPath: '/auth/callback',
        isOnline: false,
        rawRequest: null,
    })
    .then((res) => {});

//

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
const indexHtml = join(serverDistFolder, 'index.server.html');

const app = express();
const commonEngine = new CommonEngine();

// app.get('/api/products', (req, res) => {
//     const exampleProducts: Product[] = [
//         { id: 1, description: 'Lorem ipsum', image: '/foo.jpg', ingredients: ['foo', 'bar'], title: 'Product Example' },
//     ];
//     res.send(exampleProducts);
// });

/**
 * Serve static files from /browser
 */
app.get(
    '**',
    express.static(browserDistFolder, {
        maxAge: '1y',
        index: 'index.html',
    }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.get('**', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
        .render({
            bootstrap,
            documentFilePath: indexHtml,
            url: `${protocol}://${headers.host}${originalUrl}`,
            publicPath: browserDistFolder,
            providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
        })
        .then((html) => res.send(html))
        .catch((err) => next(err));
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
    const port = process.env['PORT'] || 4000;
    app.listen(port, () => {
        console.log(`Node Express server listening on http://localhost:${port}`);
    });
}
