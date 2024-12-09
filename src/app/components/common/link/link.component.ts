import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-link',
    imports: [RouterLink],
    templateUrl: './link.component.html',
    styleUrl: './link.component.css',
})
export class LinkComponent {
    to = input.required<string>();
}
