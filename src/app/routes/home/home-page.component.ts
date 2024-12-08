import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-home-page',
    imports: [RouterLink],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
})
export class HomePage {}
