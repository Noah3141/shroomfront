import { Component, computed, input, signal } from '@angular/core';
import { Status } from '../../../../types/status';

@Component({
    selector: 'app-button',
    imports: [],
    templateUrl: './button.component.html',
    styleUrl: './button.component.css',
})
export class ButtonComponent {
    // Inputs
    size = input<'small' | 'normal' | 'square'>('normal');
    fill = input<'hollow' | 'solid' | 'splash' | 'blank'>('hollow');
    color = input<'primary' | 'neutral' | 'danger'>('neutral');
    status = input<Status>('idle');
    className = input();
    // onClick(e: MouseEvent) {}

    // Signals
    mouseDown = false;
    setMouseDown() {
        this.mouseDown = true;
    }
    setMouseUp() {
        this.mouseDown = false;
    }
}
