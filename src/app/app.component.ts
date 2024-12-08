import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignUpFormComponent } from './forms/account/sign-up-form/sign-up-form.component';
import { ButtonComponent } from './components/common/button/button.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ButtonComponent, SignUpFormComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'shroomfront';
}
