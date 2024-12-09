import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LgNavComponent } from './components/nav/lg-nav/lg-nav.component';
import { SmNavComponent } from './components/nav/sm-nav/sm-nav.component';
import { CartStateService } from './services/cart-state/cart-state.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, LgNavComponent, SmNavComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [CartStateService],
})
export class AppComponent {}
