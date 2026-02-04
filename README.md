# AI Portfolio

A modern, high-performance Single Page Application (SPA) designed to curate and showcase next-generation Artificial Intelligence tools. This project is built with Angular 17+ and adheres to strict Clean Architecture principles, ensuring scalability, maintainability, and type safety.

## Project Overview

This application serves as a curated catalog of AI tools, featuring a landing page with segmented categories (General Assistants & IDEs) and detailed views for each tool. It leverages the latest Angular features to provide a seamless user experience with minimal bundle size and maximum performance.

## Architecture & Design Principles

The codebase follows a modular architecture that separates concerns distinctively:

- **Core Layer**: Contains business logic, data models, and stateless services. Data is isolated in dedicated configuration files to maintain purity in services.
- **Shared Layer**: Hosts reusable, presentation-only (dumb) components like cards and footers that are agnostic to business logic.
- **Features Layer**: Manages smart components (pages) that orchestrate data flow and user interaction.

### Key Technical Features

- **Angular Standalone Components**: Elimination of NgModules for a streamlined development workflow and better tree-shaking.
- **Angular Signals**: Granular, reactive state management replacing complex RxJS streams for synchronous data flows.
- **Single Page Application (SPA)**: Robust client-side routing with component input binding and position restoration.
- **Tailwind CSS Integration**: Utility-first styling architecture configured with a custom design system (typography, colors, and animations).
- **Type Safety**: Strict TypeScript configuration forbidding the use of `any` and enforcing strong typing across all layers.

## Technology Stack

- **Framework**: Angular 17+
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.4
- **Icons**: Phosphor Icons
- **Fonts**: Space Grotesk (Body) & Pixelify Sans (Headings)
- **Package Manager**: pnpm

## Project Structure

```text
src/app/
├── core/                  # Essential business logic
│   ├── data/             # Static data sources
│   ├── models/           # TypeScript interfaces and types
│   └── services/         # State management and data fetching
├── shared/                # Reusable UI components
│   └── components/       # Dumb components (Cards, Footers)
└── features/              # Route-level smart components
    ├── home/             # Main landing page
    └── ai-detail/        # Dynamic detail view
```

## Installation and Development

To set up the project locally, follow these steps:

1. **Prerequisites**: Ensure you have Node.js and pnpm installed.

2. **Install Dependencies**:
   ```bash
   pnpm install
   ```

3. **Start Development Server**:
   ```bash
   pnpm start
   ```
   The application will be available at `http://localhost:4200/`.

4. **Build for Production**:
   ```bash
   pnpm build
   ```
   The build artifacts will be stored in the `dist/` directory.

## License

This project is open source and available under the MIT License.
