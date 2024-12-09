import { Component, input, Input, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-textarea',
    templateUrl: './textarea.component.html',
    styleUrl: './textarea.component.css',
    imports: [ReactiveFormsModule],
})
export class TextareaComponent {
    placeholder = input<string>();
    control = input.required<FormControl>();
}
