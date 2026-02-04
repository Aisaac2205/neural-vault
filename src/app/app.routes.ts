// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'ai/:id',
        loadComponent: () => import('./features/ai-detail/ai-detail.component').then(m => m.AiDetailComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
