import { Component, input, signal } from '@angular/core';
import { ButtonComponent } from '../../../components/common/button/button.component';
import { Status } from '../../../../types/status';
import { TextInputComponent } from '../../../components/common/text-input/text-input.component';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-sign-up-form',
    imports: [ButtonComponent, TextInputComponent, ReactiveFormsModule],
    templateUrl: './sign-up-form.component.html',
    styleUrl: './sign-up-form.component.css',
})
export class SignUpFormComponent {
    status = signal<Status>('idle');
    email = new FormControl<string>('');
    password = new FormControl<string>('');

    submitForm(event: MouseEvent) {
        event.preventDefault();
        console.log('Submitting!');
        console.log(this.email.value);
        console.log(this.password.value);
    }
}
