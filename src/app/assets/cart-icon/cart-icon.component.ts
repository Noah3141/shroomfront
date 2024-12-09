import { Component, input } from '@angular/core';
import { Status } from '../../../types/status';

@Component({
    selector: 'app-cart-icon',
    imports: [],
    templateUrl: './cart-icon.component.html',
    styleUrl: './cart-icon.component.css',
})
export class CartIconComponent {
    status = input<Status>('idle');
}
