// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: '../styles.css'
})
export class AppComponent {
    title = 'ai-portfolio';
}
