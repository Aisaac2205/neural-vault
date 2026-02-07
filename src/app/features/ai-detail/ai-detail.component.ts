// src/app/features/ai-detail/ai-detail.component.ts
import { Component, Input, OnInit, inject, signal, effect } from '@angular/core';
import { CommonModule, Location } from '@angular/common'; // Import Location for back navigation
import { RouterLink } from '@angular/router';
import { AiDataService } from '../../core/services/ai-data.service';
import { AiTool } from '../../core/models/ai-tool.interface';

@Component({
    selector: 'app-ai-detail',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './ai-detail.component.html',
    styleUrls: ['./ai-detail.component.css']
})
export class AiDetailComponent implements OnInit {
    private aiService = inject(AiDataService);
    private location = inject(Location); // Inject Location service

    // Input Binding: 'id' comes directly from URL path /ai/:id
    @Input() id?: string;

    tool = signal<AiTool | undefined>(undefined);
    isLoading = this.aiService.isLoading;
    error = this.aiService.error;

    constructor() {
        // React to loading state changes to update tool when data is loaded
        effect(() => {
            if (!this.isLoading() && this.id) {
                const foundTool = this.aiService.getAiById(this.id);
                this.tool.set(foundTool);
            }
        }, { allowSignalWrites: true });
    }

    ngOnInit(): void {
        // Initial check in case data is already loaded
        if (this.id && !this.isLoading()) {
            const foundTool = this.aiService.getAiById(this.id);
            this.tool.set(foundTool);
        }
    }

    goBack(): void {
        this.location.back(); // Navigate back programmatically
    }

    retryLoad(): void {
        this.aiService.refreshTools();
    }
}
