import { Component, input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Product, ProductService } from '../../../services/product/product.service';
import { Status } from '../../../../types/status';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-view-page',
    imports: [],
    templateUrl: './view-page.component.html',
    styleUrl: './view-page.component.css',
})
export class ViewPage {
    status: Status = 'pending';
    productId: string | null = null;

    constructor(
        private title: Title,
        private route: ActivatedRoute,
        private productService: ProductService,
    ) {}

    ngOnInit() {
        this.route.queryParamMap.subscribe((params) => {
            this.productId = params.get('productId');
            if (!this.productId) {
                this.status = 'error';
                console.log('Could not find productId');
                return;
            }

            this.productService.fetchProduct().subscribe({
                next: (res) => {
                    this.product = res;
                    this.status = 'success';
                },
                error: (res) => {
                    this.status = 'error';
                    throw new Error(res);
                },
            });
        });
    }

    product?: Product;
}
