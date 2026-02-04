// src/app/features/home/home.component.ts
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { AiDataService } from '../../core/services/ai-data.service';
import { AiCardComponent } from '../../shared/components/ai-card/ai-card.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [AiCardComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
    private aiService = inject(AiDataService);

    // Consume segmented signals
    generalTools = this.aiService.generalTools;
    ideTools = this.aiService.ideTools;

    // Use all tools length for the stats
    toolCount = this.aiService.filteredTools;

    onSearch(query: string): void {
        this.aiService.updateSearch(query);
    }
}
