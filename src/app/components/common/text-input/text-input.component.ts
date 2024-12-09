import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-text-input',
    imports: [ReactiveFormsModule],
    templateUrl: './text-input.component.html',
    styleUrl: './text-input.component.css',
})
export class TextInputComponent {
    placeholder = input<string>();
    control = input.required<FormControl>();
}
