import { Injectable, signal } from '@angular/core';
import { Product } from '../product/product.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface CartItem {
    product: Product;
}

@Injectable({
    providedIn: 'root',
})
export class CartStateService {
    panelOpen = signal<boolean>(false);

    constructor(private http: HttpClient) {}

    openPanel() {
        this.panelOpen.set(true);
    }
    closePanel() {
        this.panelOpen.set(false);
    }

    contents = signal<CartItem[]>([]);
    add(product: Product, qty: number = 1) {
        this.contents.update((contents) => contents.concat(Array(qty).fill({ product })));
    }
    remove(product: Product) {
        this.contents.update((contents) => {
            const tagged = contents.findIndex((item) => item.product.id == product.id);
            contents.splice(tagged, 1);
            return contents;
        });
    }
    clear(product: Product) {
        this.contents.update((contents): CartItem[] => contents.filter((item) => item.product.id != product.id));
    }
}
