import { Component, input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Product, ProductService } from '../../../services/product/product.service';
import { Status } from '../../../../types/status';
import { ActivatedRoute } from '@angular/router';
import { ButtonComponent } from '../../../components/common/button/button.component';
import { CartStateService } from '../../../services/cart-state/cart-state.service';
import { NumberInputComponent } from '../../../components/common/number-input/number-input.component';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-view-page',
    imports: [ButtonComponent, NumberInputComponent],
    templateUrl: './view-page.component.html',
    styleUrl: './view-page.component.css',
})
export class ViewPage {
    status: Status = 'pending';
    productId: string | null = null;
    product?: Product;

    addQty = new FormControl<number>(1);

    constructor(
        private title: Title,
        private route: ActivatedRoute,
        private productService: ProductService,
        private cartState: CartStateService,
    ) {}

    ngOnInit() {
        this.route.queryParamMap.subscribe((params) => {
            this.productId = params.get('productId');
            if (!this.productId) {
                this.status = 'error';
                console.log('Could not find productId');
                return;
            }

            this.productService.fetchProducts().subscribe({
                next: (res) => {
                    this.product = res.find((item) => item.id == Number(this.productId));
                    this.status = 'success';
                },
                error: (res) => {
                    this.status = 'error';
                    throw new Error(res);
                },
            });
        });
    }

    addProductToCart() {
        if (!!this.product) {
            this.cartState.add(this.product, this.addQty.value!);
        } else {
            throw new Error('Never');
        }
    }
}
