import { Component, input, Input } from '@angular/core';

@Component({
    selector: 'profile-image',
    imports: [],
    styleUrl: './profile-image.component.css',
    template: `<img src="{{ src() }}" alt="{{ alt() }}" />`,
})
export class ProfileImageComponent {
    src = input.required<string>();
    alt = input.required<string>();
}
