import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../../../services/product/product.service';

@Component({
    selector: 'app-product-list',
    imports: [],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
    products: Product[] = [];
    isLoading = true;

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.loadProducts();
    }

    loadProducts(): void {
        this.isLoading = true;
        this.products = [];
        setTimeout(() => {
            this.productService.fetchProducts().subscribe({
                next: (response) => {
                    this.products = response;
                    this.isLoading = false;
                },
                error: (error) => {
                    console.error('Error fetching products', error);
                    this.isLoading = false;
                },
                complete: () => {},
            });
        }, 5000);
    }
}
