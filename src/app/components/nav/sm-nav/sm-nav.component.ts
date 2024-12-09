import { Component } from '@angular/core';
import { HamburgerIconComponent } from '../../../assets/hamburger-icon/hamburger-icon.component';
import { CartIconComponent } from '../../../assets/cart-icon/cart-icon.component';
import { ProfileIconComponent } from '../../../assets/profile-icon/profile-icon.component';
import { CartStateService } from '../../../services/cart-state/cart-state.service';
import { SidePanelComponent } from '../side-panel/side-panel.component';

@Component({
    selector: 'app-sm-nav',
    imports: [HamburgerIconComponent, SidePanelComponent, CartIconComponent, ProfileIconComponent],
    templateUrl: './sm-nav.component.html',
    styleUrl: './sm-nav.component.css',
})
export class SmNavComponent {
    constructor(public cartState: CartStateService) {}

    sidePanelOpen: boolean = false;
    openSidePanel() {
        this.sidePanelOpen = true;
        this.cartState.closePanel();
    }
    closeSidePanel() {
        this.sidePanelOpen = false;
    }
}
