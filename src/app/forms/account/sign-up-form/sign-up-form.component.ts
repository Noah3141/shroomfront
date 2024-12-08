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
    status: Status = 'idle';
    email = new FormControl<string>('');
    password = new FormControl<string>('');

    submitForm(event: MouseEvent) {
        event.preventDefault();

        if (this.status == 'idle') {
            console.log('Submitting!');
            console.log(this.email.value);
            console.log(this.password.value);
            this.status = 'pending';

            try {
                let foo = Math.random();

                if (foo > 0.5) {
                    this.status = 'success';
                    setTimeout(() => {
                        this.status = 'idle';
                    }, 3000);
                } else {
                    throw new Error('foo');
                }
            } catch {
                this.status = 'error';
                setTimeout(() => {
                    this.status = 'idle';
                }, 3000);
            }
        }
    }
}
