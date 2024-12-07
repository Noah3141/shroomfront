import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../../../components/common/button/button.component';
import { Status } from '../../../../types/status';
import { TextInputComponent } from "../../../components/common/text-input/text-input.component";

@Component({
    selector: 'app-sign-up-form',
    imports: [ButtonComponent, TextInputComponent],
    templateUrl: './sign-up-form.component.html',
    styleUrl: './sign-up-form.component.css',
})
export class SignUpFormComponent {
    status = signal<Status>('idle');

    submitForm(event: MouseEvent) {
        event.preventDefault();
        console.log('Submitting!');
    }
}
