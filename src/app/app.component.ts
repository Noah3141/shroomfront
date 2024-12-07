import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignUpFormComponent } from './forms/account/sign-up-form/sign-up-form.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, SignUpFormComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'shroomfront';
}
