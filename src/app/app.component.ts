import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignUpFormComponent } from './forms/account/sign-up-form/sign-up-form.component';
import { ButtonComponent } from './components/common/button/button.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ButtonComponent, SignUpFormComponent, ProductListComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'shroomfront';
}
