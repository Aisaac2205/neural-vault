// src/app/core/services/ai-data.service.ts
import { Injectable, signal, computed } from '@angular/core';
import { AiTool } from '../models/ai-tool.interface';
import { AI_TOOLS } from '../data/ai-tools.data';

@Injectable({
    providedIn: 'root'
})
export class AiDataService {
    // 1. Core State: List of Tools
    // Using static data now
    private _tools = signal<AiTool[]>(AI_TOOLS);

    // 2. Filter State: Search Query
    searchQuery = signal<string>('');

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

    constructor() { }

    // Action to update the filter
    updateSearch(query: string) {
        this.searchQuery.set(query);
    }

    // --- NEW METHOD FOR DETAIL PAGE ---
    getAiById(id: string): AiTool | undefined {
        return this._tools().find(tool => tool.id === id);
    }
}
