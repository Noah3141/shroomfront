import { Component } from '@angular/core';
import { ProductListComponent } from '../../components/product/product-list/product-list.component';

@Component({
    selector: 'app-products-page',
    imports: [ProductListComponent],
    templateUrl: './products-page.component.html',
    styleUrl: './products-page.component.css',
})
export class ProductsPage {}
