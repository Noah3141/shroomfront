import { Component, input } from '@angular/core';
import { Status } from '../../../../types/status';

@Component({
    selector: 'app-button',
    imports: [],
    templateUrl: './button.component.html',
    styleUrl: './button.component.css',
})
export class ButtonComponent {
    status = input<Status>('idle');
    onClick(e: MouseEvent) {}
}
