import { Component, input, output } from '@angular/core';
import { XIconComponent } from '../../../assets/x-icon/x-icon.component';

@Component({
    selector: 'app-side-panel',
    imports: [XIconComponent],
    standalone: true,
    templateUrl: './side-panel.component.html',
    styleUrl: './side-panel.component.css',
})
export class SidePanelComponent {
    closepanel = output<MouseEvent>();
    closePanel(event: MouseEvent) {
        this.closepanel.emit(event);
    }

    title = input.required<string>();
}
