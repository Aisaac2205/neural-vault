// src/app/core/data/ai-tools.data.ts
import { AiTool } from '../models/ai-tool.interface';

export const AI_TOOLS: AiTool[] = [
    // --- GENERAL TOOLS ---
    {
        id: 'claude-4-5-opus',
        name: 'Claude 4.5 Opus',
        specialty: 'Razonamiento autónomo y arquitectura de sistemas complejos.',
        description: 'La joya de Anthropic para 2026. Claude 4.5 Opus ya no solo escribe código, entiende la arquitectura completa de sistemas empresariales. Su capacidad de "pensamiento lento" le permite resolver bugs que requieren contexto de miles de archivos sin alucinar.',
        pricing: 'Free / $20/mo',
        tags: ['LLM', 'System Architecture', 'Reasoning'],
        url: 'https://claude.ai',
        icon: 'ph-brain',
        category: 'GENERAL'
    },
    {
        id: 'gpt-5-2',
        name: 'GPT-5.2 (Atlas)',
        specialty: 'Agente universal con acción directa en sistemas operativos.',
        description: 'OpenAI ha dejado atrás los chats. GPT-5.2 "Atlas" puede operar tu computadora como un humano: mueve el mouse, usa aplicaciones y gestiona flujos de trabajo completos. Su multimodalidad es instantánea, con latencia cero en voz y video.',
        pricing: 'Free / $25/mo',
        tags: ['Agent', 'OS Control', 'Multimodal'],
        url: 'https://chat.openai.com',
        icon: 'ph-robot', // Icono actualizado
        category: 'GENERAL'
    },
    {
        id: 'midjourney-v8',
        name: 'Midjourney v8',
        specialty: 'Generación de video y mundos 3D interactivos.',
        description: 'Ya no son solo imágenes. Midjourney v8 genera entornos 3D texturizados listos para Unreal Engine 6 y clips de video cinematográficos indistinguibles de la realidad, todo controlado por lenguaje natural.',
        pricing: 'Free / $20/mo',
        tags: ['3D Generation', 'Video', 'Cinema'],
        url: 'https://midjourney.com',
        icon: 'ph-film-strip', // Icono actualizado
        category: 'GENERAL'
    },
    {
        id: 'perplexity',
        name: 'Perplexity',
        specialty: 'Motor de búsqueda conversacional con citas de fuentes en tiempo real.',
        description: 'Perplexity combina la potencia de los LLMs con un índice de búsqueda en tiempo real. Proporciona respuestas precisas, actualizadas y siempre citadas, convirtiéndose en la alternativa moderna a los motores de búsqueda tradicionales para investigación profunda.',
        pricing: 'Free / $20/mo',
        tags: ['Search', 'Research', 'Real-time'],
        url: 'https://perplexity.ai',
        icon: 'ph-magnifying-glass',
        category: 'GENERAL'
    },
    {
        id: 'github-copilot',
        name: 'GitHub Copilot',
        specialty: 'Autocompletado de código en tiempo real integrado en el editor.',
        description: 'El asistente de programación IA más adoptado del mundo. GitHub Copilot convierte el lenguaje natural en sugerencias de codificación en tiempo real, ayudando a escribir código más rápido y con menos errores directamente en tu IDE.',
        pricing: '$10/mo',
        tags: ['Coding', 'Developer Tools'],
        url: 'https://github.com/features/copilot',
        icon: 'ph-code',
        category: 'GENERAL'
    },
    {
        id: 'suno-ai',
        name: 'Suno AI',
        specialty: 'Generación de música y canciones realistas a partir de texto.',
        description: 'Suno está democratizando la creación musical. Su IA puede generar canciones completas de 2 minutos con voces realistas, instrumentación compleja y letras coherentes en cuestión de segundos, todo a partir de un simple prompt de texto.',
        pricing: 'Free / Credits',
        tags: ['Audio', 'Music', 'Creative'],
        url: 'https://suno.com',
        icon: 'ph-music-notes',
        category: 'GENERAL'
    },
    {
        id: 'gemini-3-0-ultra',
        name: 'Gemini 3.0 Ultra',
        specialty: 'Contexto infinito y comprensión nativa de video 8K.',
        description: 'Google rompió la barrera del contexto. Gemini 3.0 no tiene límite de tokens práctico. Puedes subirle toda la documentación de tu empresa, videos de reuniones de todo el año y repositorios completos, y te responderá en milisegundos gracias a sus chips TPU v6.',
        pricing: 'Free / One',
        tags: ['Infinite Context', 'Google', 'Video Native'],
        url: 'https://gemini.google.com',
        icon: 'ph-google-logo',
        category: 'GENERAL'
    },
    {
        id: 'grok-3',
        name: 'Grok 3',
        specialty: 'Acceso en tiempo real a X (Twitter) y personalidad sin filtros.',
        description: 'Grok 3, desarrollado por xAI, tiene una ventaja única: acceso en tiempo real a la inmensa base de datos de conocimientos de la plataforma X. Diseñado con un toque de humor y rebeldía, ofrece una perspectiva fresca y actualizada sobre eventos mundiales.',
        pricing: 'Premium+ on X',
        tags: ['Real-time', 'X', 'Uncensored'],
        url: 'https://grok.x.ai',
        icon: 'ph-x-logo',
        category: 'GENERAL'
    },
    {
        id: 'qwen-2-5',
        name: 'Qwen 2.5',
        specialty: 'Modelo open-weights líder en matemáticas y programación.',
        description: 'La serie Qwen 2.5 de Alibaba demuestra que los modelos abiertos pueden competir con los cerrados. Destaca especialmente en razonamiento matemático y tareas de codificación, siendo una opción favorita para investigadores y desarrolladores open source.',
        pricing: 'Open Source',
        tags: ['Open Source', 'Coding', 'Math'],
        url: 'https://qwenlm.github.io',
        icon: 'ph-brackets-curly',
        category: 'GENERAL'
    },

    // --- IDEs ---
    {
        id: 'antigravity',
        name: 'Antigravity',
        specialty: 'Agente de codificación avanzado de Google DeepMind.',
        description: 'Antigravity no es solo un editor, es un agente autónomo capaz de razonar, planificar y ejecutar tareas de ingeniería de software complejas. Diseñado por Google DeepMind, representa el futuro de la programación asistida por agentes.',
        pricing: 'Enterprise / Private Beta',
        tags: ['IDE', 'Agent', 'Google'],
        url: '#',
        icon: 'ph-rocket',
        category: 'IDE'
    },
    {
        id: 'claude-code',
        name: 'Claude Code',
        specialty: 'Interface CLI para programación asistida por agentes.',
        description: 'Claude Code lleva la inteligencia de Claude directamente a tu terminal. Permite realizar refactorizaciones, explicaciones de código y generación de scripts sin salir de la línea de comandos, integrándose perfectamente en flujos de trabajo de desarrolladores.',
        pricing: 'Included with API',
        tags: ['IDE', 'CLI', 'Agent'],
        url: 'https://www.anthropic.com',
        icon: 'ph-terminal',
        category: 'IDE'
    },
    {
        id: 'vscode',
        name: 'Visual Studio Code',
        specialty: 'El editor estándar de la industria, potenciado por Copilot.',
        description: 'VS Code es el editor de código más popular del mundo por una razón: su ecosistema de extensiones es inigualable. Con la integración profunda de GitHub Copilot, se transforma en una potente estación de trabajo asistida por IA.',
        pricing: 'Free',
        tags: ['IDE', 'Editor', 'Microsoft'],
        url: 'https://code.visualstudio.com',
        icon: 'ph-code',
        category: 'IDE'
    },
    {
        id: 'open-code',
        name: 'Open Code',
        specialty: 'Entornos de codificación abiertos impulsados por la comunidad.',
        description: 'Una iniciativa para crear entornos de desarrollo totalmente de código abierto, modulares y flexibles, diseñados para ser la base sobre la cual la comunidad puede construir sus propias herramientas de IA personalizadas.',
        pricing: 'Open Source',
        tags: ['IDE', 'Open Source', 'Community'],
        url: '#',
        icon: 'ph-git-branch',
        category: 'IDE'
    },
    {
        id: 'cursor',
        name: 'Cursor',
        specialty: 'El editor "AI-first" fork de VS Code.',
        description: 'Cursor es un fork de VS Code reescrito para integrar la IA en su núcleo. Con características como "Copilot++" que predice tu próxima edición y un chat capaz de ver todo tu codebase, ofrece la experiencia de desarrollo con IA más fluida actualmente.',
        pricing: 'Free / $20/mo',
        tags: ['IDE', 'AI Native', 'Productivity'],
        url: 'https://cursor.sh',
        icon: 'ph-cursor',
        category: 'IDE'
    },
    {
        id: 'windsurf-2',
        name: 'Windsurf 2.0',
        specialty: 'Flujos de código predictivos y "Time Travel Debugging".',
        description: 'Windsurf 2 predice errores antes de que compiles. Su función "Flow State" ajusta la interfaz según tu nivel de concentración y te permite viajar en el tiempo para ver cómo evolucionó tu lógica, explicado por IA.',
        pricing: '$20/mo',
        tags: ['IDE', 'Flow', 'Predictive'],
        url: 'https://codeium.com/windsurf',
        icon: 'ph-waves',
        category: 'IDE'
    }
];