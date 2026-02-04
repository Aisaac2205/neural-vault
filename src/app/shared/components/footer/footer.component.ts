// src/app/shared/components/footer/footer.component.ts
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
    // Using signals for static data too, preparing for future dynamic needs (e.g. from config)
    currentYear = signal(new Date().getFullYear());
    socialLinks = signal([
        { name: 'GitHub', url: 'https://github.com/Aisaac2205' },
        { name: 'Portafolio', url: 'https://isaacsf.up.railway.app/' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/isaac-sarce%C3%B1o-aa2850374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' }
    ]);
}
