import { Component, computed, input } from '@angular/core';
import { Product } from '../../../services/product/product.service';
import { CartIconComponent } from '../../../assets/cart-icon/cart-icon.component';
import { CartStateService } from '../../../services/cart-state/cart-state.service';
import { Status } from '../../../../types/status';
import { ButtonComponent } from '../../common/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-product-card',
    imports: [CartIconComponent, ButtonComponent, RouterLink],
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
    constructor(private cartState: CartStateService) {}

    status: Status = 'idle';
    product = input.required<Product>();

    isInCart = computed<boolean>(() => {
        const present = this.cartState.contents().find((item) => item.product.id == this.product().id);
        return !!present;
    });

    ngOnInit() {
        if (this.isInCart()) {
            this.status = 'success';
        }
    }

    addProductToCart() {
        this.status = 'pending';
        this.cartState.add(this.product());
        this.status = 'success';
    }

    clearProductFromCart() {
        this.status = 'pending';
        this.cartState.clear(this.product());
        this.status = 'idle';
    }

    toggleProductInCart() {
        if (!this.isInCart()) {
            this.addProductToCart();
        } else {
            this.clearProductFromCart();
        }
    }
}
