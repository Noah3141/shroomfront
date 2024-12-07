import { Component, signal } from '@angular/core';

@Component({
    selector: 'sign-in-button',
    imports: [],
    templateUrl: './sign-in-button.component.html',
    styleUrl: './sign-in-button.component.scss',
})
export class SignInButtonComponent {
    open = signal<boolean>(false);

    onClick() {
        this.open.update((p) => !p);
    }
}
