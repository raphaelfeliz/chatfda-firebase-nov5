# /home/user/studio/tsconfig.json
- **Purpose**: TypeScript configuration for the project.
- **Specs**:
  - `target`: "es5"
  - `lib`: ["dom", "dom.iterable", "esnext"]
  - `allowJs`: true
  - `strict`: true
  - `module`: "esnext"
  - `moduleResolution`: "bundler"
  - `jsx`: "preserve"
  - `plugins`: `name: "next"`
  - `paths`: `@/*`: `["./src/*"]`

# /home/user/studio/next.config.ts
- **Purpose**: Configures the Next.js application.
- **Specs**:
  - `typescript.ignoreBuildErrors`: true
  - `eslint.ignoreDuringBuilds`: true
  - `images.remotePatterns`: Allows images from `placehold.co`, `images.unsplash.com`, `picsum.photos`, `storage.googleapis.com`.

# /home/user/studio/package.json
- **Purpose**: Defines project metadata, dependencies, and scripts.
- **Specs**:
  - `name`: "nextn"
  - `version`: "0.1.0"
  - `scripts`: `dev`, `build`, `start`, `lint`, `genkit:dev`
  - `dependencies`: `next`, `react`, `genkit`, `firebase`, `tailwindcss`
  - `devDependencies`: `typescript`, `postcss`

# /home/user/studio/tailwind.config.ts
- **Purpose**: Configures Tailwind CSS.
- **Specs**:
  - `darkMode`: 'class'
  - `content`: Scans `src/pages`, `src/components`, and `src/app`.
  - `theme`: Extends with custom fonts (`Inter`), colors, and animations.
  - `plugins`: `tailwindcss-animate`

# /home/user/studio/src/app/layout.tsx
- **Purpose**: The root layout for the entire application.
- **Summary**: Sets up the basic HTML structure, applies global styles, and includes the `AppHeader`.
- **Imports**: `Inter`, `cn`, `AppHeader`, `Toaster`, `globals.css`.
- **Exports**: `metadata`, `RootLayout` component.

# /home/user/studio/src/app/page.tsx
- **Purpose**: The main page of the application.
- **Summary**: Displays the `Configurator` component.
- **Imports**: `Configurator`.
- **Exports**: `Home` component.

# /home/user/studio/src/components/configurator.tsx
- **Purpose**: The main component for the door and window configurator.
- **Summary**: Manages the configuration process using the `useTriage` hook and displays options and progress.
- **Imports**: `useTriage`, `OptionCard`, `ProgressTracker`, `SkuDisplay`.
- **Exports**: `Configurator` component.

# /home/user/studio/src/lib/triage.ts
- **Purpose**: Defines the state machine for the configurator.
- **Summary**: The `TriageMachine` class manages the state transitions based on user selections.
- **Exports**: `TriageMachine`, `Option`, `QuestionState`.

# /home/user/studio/src/hooks/use-triage.ts
- **Purpose**: Custom hook to interact with the `TriageMachine`.
- **Summary**: Provides an interface for selecting options and resetting the configurator state.
- **Imports**: `useState`, `useCallback`, `useMemo`, `TriageMachine`, `QuestionState`.
- **Exports**: `useTriage` hook.

# /home/user/studio/src/components/app-header.tsx
- **Purpose**: Displays the application header.

# /home/user/studio/src/components/option-card.tsx
- **Purpose**: Renders a selectable option card.

# /home/user/studio/src/components/progress-tracker.tsx
- **Purpose**: Shows the user's progress through the configurator.

# /home/user/studio/src/components/sku-display.tsx
- **Purpose**: Displays the final SKU.

# /home/user/studio/src/components/ui/*
- **Purpose**: ShadCN UI components (Accordion, Alert, etc.).

# /home/user/studio/src/lib/placeholder-images.json
- **Purpose**: JSON file with placeholder image data.

# /home/user/studio/src/lib/placeholder-images.ts
- **Purpose**: Exports placeholder image data.

# /home/user/studio/src/lib/utils.ts
- **Purpose**: Utility functions.

# /home/user/studio/src/lib/whatsapp.ts
- **Purpose**: Functions for WhatsApp integration.
