// src/app/shared/components/ai-card/ai-card.component.ts
import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common'; // Not strictly needed with new control flow but good practice if needed
import { RouterLink } from '@angular/router';
import { AiTool } from '../../../core/models/ai-tool.interface';

@Component({
    selector: 'app-ai-card',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './ai-card.component.html',
    styleUrls: ['./ai-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AiCardComponent {
    // Use the new Signal Input API
    // required: true ensures strict type checking at compile time
    tool = input.required<AiTool>();
}
