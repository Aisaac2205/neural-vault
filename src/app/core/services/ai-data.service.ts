// src/app/core/services/ai-data.service.ts
import { Injectable, signal, computed, inject, effect } from '@angular/core';
import { AiTool } from '../models/ai-tool.interface';
import { AiApiService, RecommendationRequest } from './ai-api.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AiDataService {
    private apiService = inject(AiApiService);

    // 1. Core State: List of Tools (now loaded from backend)
    private _tools = signal<AiTool[]>([]);

    // Loading and Error states
    isLoading = signal<boolean>(true);
    error = signal<string | null>(null);

    // 2. Filter State: Search Query
    searchQuery = signal<string>('');

    constructor() {
        // Load data from backend on service initialization
        this.loadTools();
    }

    private loadTools(): void {
        this.isLoading.set(true);
        this.error.set(null);

        this.apiService.getAllTools().subscribe({
            next: (tools) => {
                this._tools.set(tools);
                this.isLoading.set(false);
            },
            error: (err) => {
                this.error.set('Failed to load AI tools. Please try again later.');
                this.isLoading.set(false);
                console.error('Error loading tools:', err);
            }
        });
    }

    // Reload tools (useful for retry functionality)
    refreshTools(): void {
        this.loadTools();
    }

    // 3. Computed State: Segmented Lists
    // Common filtering logic
    private filterLogic(tools: AiTool[], query: string): AiTool[] {
        if (!query) return tools;
        return tools.filter(tool =>
            tool.name.toLowerCase().includes(query) ||
            tool.specialty.toLowerCase().includes(query) ||
            tool.tags.some(tag => tag.toLowerCase().includes(query))
        );
    }

    readonly generalTools = computed(() => {
        const allTools = this._tools();
        const query = this.searchQuery().toLowerCase();
        const general = allTools.filter(t => t.category === 'GENERAL');
        return this.filterLogic(general, query);
    });

    readonly ideTools = computed(() => {
        const allTools = this._tools();
        const query = this.searchQuery().toLowerCase();
        const ides = allTools.filter(t => t.category === 'IDE');
        return this.filterLogic(ides, query);
    });

    readonly filteredTools = computed(() => {
        const allTools = this._tools();
        const query = this.searchQuery().toLowerCase();
        return this.filterLogic(allTools, query);
    });

    // Top featured tools for home page carousels
    readonly topAgents = computed(() => {
        const allTools = this._tools();
        return allTools
            .filter(tool =>
                // Search in ANY category for agent/autonomous tags (case-insensitive)
                tool.tags.some(tag =>
                    tag.toLowerCase().includes('agente') ||
                    tag.toLowerCase().includes('autónomo')
                )
            )
            .slice(0, 6);
    });

    readonly topIDEs = computed(() => {
        const allTools = this._tools();
        return allTools
            .filter(tool => tool.category === 'IDE')
            .slice(0, 6);
    });

    // Action to update the filter
    updateSearch(query: string) {
        this.searchQuery.set(query);
    }

    // --- METHOD FOR DETAIL PAGE ---
    getAiById(id: string): AiTool | undefined {
        return this._tools().find(tool => tool.id === id);
    }

    // --- NEW METHOD: Get recommendation from AI ---
    getRecommendation(query: string, callback: (tool: AiTool | null, error?: string) => void): void {
        const request: RecommendationRequest = { query };

        this.apiService.getRecommendation(request).subscribe({
            next: (tool) => {
                callback(tool);
            },
            error: (err) => {
                callback(null, 'Failed to get recommendation. Please try again.');
                console.error('Error getting recommendation:', err);
            }
        });
    }
}
