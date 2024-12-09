import { Component } from '@angular/core';
import { CartStateService } from '../../../services/cart-state/cart-state.service';
import { Product } from '../../../services/product/product.service';

@Component({
    selector: 'app-cart-panel',
    imports: [],
    templateUrl: './cart-panel.component.html',
    styleUrl: './cart-panel.component.css',
})
export class CartPanelComponent {
    constructor(public cartState: CartStateService) {}

    itemized() {
        const contents = this.cartState.contents();

        return contents.reduce(
            (acc, item) => {
                const extant = acc.findIndex((el) => el.product.id === item.product.id);
                if (extant !== -1) {
                    acc[extant] = { ...acc[extant], qty: acc[extant].qty + 1 };
                } else {
                    acc.push({ product: item.product, qty: 1 });
                }
                return acc;
            },
            [] as { product: Product; qty: number }[], // Accumulator starts as an empty array
        );
    }
}
