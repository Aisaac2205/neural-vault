import { Component, inject, ChangeDetectionStrategy, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AiDataService } from '../../core/services/ai-data.service';
import { AiCardComponent } from '../../shared/components/ai-card/ai-card.component';
import { InfiniteCarouselComponent } from '../../shared/components/infinite-carousel/infinite-carousel.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [AiCardComponent, InfiniteCarouselComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
    private aiService = inject(AiDataService);
    private router = inject(Router);

    // Consume segmented signals
    generalTools = this.aiService.generalTools;
    ideTools = this.aiService.ideTools;

    // Use all tools length for the stats
    toolCount = this.aiService.filteredTools;

    // Loading and Error states
    isLoading = this.aiService.isLoading;
    error = this.aiService.error;

    // Carousel featured tools
    topAgents = this.aiService.topAgents;
    topIDEs = this.aiService.topIDEs;

    // AI Search State
    isSearchingAI = signal<boolean>(false);

    onSearch(query: string): void {
        this.aiService.updateSearch(query);
    }

    searchWithAI(query: string): void {
        if (!query.trim()) return;

        this.isSearchingAI.set(true);

        // Reset local filter when searching with AI to avoid confusion
        this.onSearch('');

        this.aiService.getRecommendation(query, (tool, error) => {
            this.isSearchingAI.set(false);

            if (error) {
                alert(error); // Simple feedback for now
                return;
            }

            if (tool) {
                // Navigate to tool detail page
                this.router.navigate(['/ai', tool.id]);
            } else {
                alert('No se encontró una herramienta adecuada para tu búsqueda.');
            }
        });
    }

    retryLoad(): void {
        this.aiService.refreshTools();
    }
}
