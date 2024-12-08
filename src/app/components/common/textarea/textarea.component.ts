import { Component, input, Input, signal } from '@angular/core';

@Component({
    selector: 'app-textarea',
    templateUrl: './textarea.component.html',
    styleUrl: './textarea.component.css',
    imports: [],
})
export class TextareaComponent {
    placeholder = input<string>();
    value = signal<string>('');
    onChange = input<() => void>();
}
