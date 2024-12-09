import { Routes } from '@angular/router';
import { HomePage } from './routes/home/home-page.component';
import { SignUpPage } from './routes/auth/sign-up/sign-up-page.component';
import { ProductsPage } from './routes/products/products-page.component';
import { ViewPage as ProductViewPage } from './routes/products/[productId]/view-page.component';
import { NotFoundPage } from './routes/not-found/not-found-page.component';

export const routes: Routes = [
    { path: '', component: HomePage, title: 'Mushrooms' },
    { path: 'auth/sign-up', component: SignUpPage, title: 'Sign Up' },
    //
    { path: 'products/view', component: ProductViewPage },
    { path: 'products', component: ProductsPage, title: 'Products' },
    { path: '**', component: NotFoundPage },
];

// Breaks URL into segments
// Takes first one and scans root list, until a match,
// Takes the next segment and tries to match among children, and if it can't, reverts up a layer
// foo/bar/:id  provides for component under params/paramMap

// queryParams/queryParamMap, by contrast, do not occur here! Get a match, plainly, and then use dynamic:
//      <a routerLink="/foo" [queryParams]="{key: 'value'}" ></a>
// Otherwise, if you try to manually write it into routerLink (or dynamically write it there) it will undergo URL encoding and break shit
