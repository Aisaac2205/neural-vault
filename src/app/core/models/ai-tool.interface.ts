// src/app/core/models/ai-tool.interface.ts

export interface AiTool {
  id: string;
  name: string;
  specialty: string;
  description: string;
  pricing: string;
  tags: string[];
  url: string;
  // Campos nuevos agregados para la versión 2026:
  icon: string;
  category: 'GENERAL' | 'IDE'; // Usamos un tipo específico para autocompletado mágico
}