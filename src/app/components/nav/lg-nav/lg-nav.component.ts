import { Component } from '@angular/core';
import { CartIconComponent } from '../../../assets/cart-icon/cart-icon.component';
import { ProfileIconComponent } from '../../../assets/profile-icon/profile-icon.component';
import { SidePanelComponent } from '../side-panel/side-panel.component';
import { CartStateService } from '../../../services/cart-state/cart-state.service';
import { RouterLink } from '@angular/router';
import { CartPanelComponent } from "../../cart/cart-panel/cart-panel.component";

@Component({
    selector: 'app-lg-nav',
    imports: [CartIconComponent, ProfileIconComponent, SidePanelComponent, RouterLink, CartPanelComponent],
    templateUrl: './lg-nav.component.html',
    styleUrl: './lg-nav.component.css',
})
export class LgNavComponent {
    constructor(public cartState: CartStateService) {}
}
