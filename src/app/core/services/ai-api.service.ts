import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AiTool } from '../models/ai-tool.interface';
import { environment } from '../../../environments/environment';

export interface RecommendationRequest {
    query: string;
}

@Injectable({
    providedIn: 'root'
})
export class AiApiService {
    private http = inject(HttpClient);
    private apiUrl = environment.apiUrl;

    getAllTools(): Observable<AiTool[]> {
        return this.http.get<AiTool[]>(`${this.apiUrl}/tools`);
    }

    getToolById(id: string): Observable<AiTool> {
        return this.http.get<AiTool>(`${this.apiUrl}/tools/${id}`);
    }

    getToolsByCategory(category: 'GENERAL' | 'IDE'): Observable<AiTool[]> {
        return this.http.get<AiTool[]>(`${this.apiUrl}/tools/category/${category}`);
    }

    getRecommendation(request: RecommendationRequest): Observable<AiTool> {
        return this.http.post<AiTool>(`${this.apiUrl}/recommend`, request);
    }
}
