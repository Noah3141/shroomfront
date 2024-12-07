import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignInButtonComponent } from "./user/sign-in-button/sign-in-button.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, SignInButtonComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'shroomfront';
}
