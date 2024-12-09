import { Component, computed, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';

@Component({
    selector: 'app-number-input',
    imports: [ReactiveFormsModule, ButtonComponent],
    templateUrl: './number-input.component.html',
    styleUrl: './number-input.component.css',
})
export class NumberInputComponent {
    control = input.required<FormControl>();
    atMinimum() {
        return this.control().value == 1;
    }

    increment() {
        this.control().setValue(this.control().value + 1);
    }

    decrement() {
        if (!this.atMinimum()) {
            this.control().setValue(this.control().value - 1);
        }
    }
}
