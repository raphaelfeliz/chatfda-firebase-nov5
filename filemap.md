# /home/user/studio/tsconfig.json
- **Purpose**: This file is the TypeScript configuration for the project. It specifies the compiler options and the files to be included in the compilation.
- **Summary**: The configuration is set up for a Next.js project. It includes options for the target JavaScript version, module resolution, JSX handling, and path aliases. The `compilerOptions` are configured to be strict, to allow for JavaScript files, and to work with the Next.js framework. It also defines a path alias `@/*` to refer to the `src` directory.
- **Imports**: This file does not contain any imports.
- **Exports**: This file does not export any modules.

# /home/user/studio/next.config.ts
- **Purpose**: This file is used to configure the Next.js application. It allows for customization of the build process, server configuration, and other Next.js features.
- **Summary**: The configuration is set up to ignore TypeScript and ESLint errors during the build process. It also configures the `images` option to allow for remote images from specific domains.
- **Imports**: `NextConfig` from `next`.
- **Exports**: A default `nextConfig` object.

# /home/user/studio/package.json
- **Purpose**: This file defines the project's metadata, dependencies, and scripts.
- **Summary**: The file includes the project name, version, and a list of dependencies required for the application to run. It also defines several scripts for development, building, and linting the project.
- **Imports**: This file does not contain any imports.
- **Exports**: This file does not export any modules.

# /home/user/studio/tailwind.config.ts
- **Purpose**: This file is used to configure Tailwind CSS. It allows for customization of the design system, including colors, fonts, and other utility classes.
- **Summary**: The configuration is set up for a Next.js project. It defines the content to be scanned for utility classes, and extends the default theme with custom fonts, colors, and animations. It also includes the `tailwindcss-animate` plugin.
- **Imports**: `Config` from `tailwindcss`.
- **Exports**: A default configuration object.

# /home/user/studio/src/app/layout.tsx
- **Purpose**: The root layout for the entire application. It sets up the basic HTML structure, including the `<html>` and `<body>` tags, and applies global styles.
- **Summary**: This component wraps all other pages and components. It defines the primary font, background color, and overall layout of the application. It also includes the `AppHeader` component, which is displayed on all pages.
- **Imports**: `Inter` from `next/font/google`, `cn` from `@/lib/utils`, `AppHeader` from `@/components/app-header`, `Toaster` from `@/components/ui/toaster`, and global styles.
- **Exports**: `metadata` and a default `RootLayout` component.

# /home/user/studio/src/app/page.tsx
- **Purpose**: The main page of the application. It is the entry point for users visiting the site.
- **Summary**: This component displays the `Configurator` component, which is the core of the application.
- **Imports**: `Configurator` from `@/components/configurator`.
- **Exports**: a default `Home` component.

# /home/user/studio/src/components/configurator.tsx
- **Purpose**: The main component for the door and window configurator. It manages the user interaction and state of the configuration process.
- **Summary**: This component uses the `useTriage` hook to manage the state of the configurator. It displays the current question, the options as `OptionCard` components, and the `ProgressTracker`. When a final SKU is reached, it displays the `SkuDisplay` component.
- **Imports**: `useTriage` from `@/hooks/use-triage`, `OptionCard` from `@/components/option-card`, `ProgressTracker` from `@/components/progress-tracker`, `SkuDisplay` from `@/components/sku-display`.
- **Exports**: a default `Configurator` component.

# /home/user/studio/src/lib/triage.ts
- **Purpose**: This file defines the state machine for the configurator. It contains the logic for transitioning between questions based on user selections.
- **Summary**: The `TriageMachine` class manages the state of the configurator. It has methods for getting the current state, resetting the state, and processing user selections. The file also defines the `Option` and `QuestionState` types.
- **Imports**: This file does not contain any imports.
- **Exports**: `TriageMachine`, `Option`, and `QuestionState`.

# /home/user/studio/src/hooks/use-triage.ts
- **Purpose**: This custom hook provides a simple interface for interacting with the `TriageMachine`.
- **Summary**: The `useTriage` hook initializes a `TriageMachine` instance and provides methods for selecting an option and resetting the state. It uses the `useState` hook to manage the `QuestionState`.
- **Imports**: `useState`, `useCallback`, `useMemo` from `react`, `TriageMachine`, `QuestionState` from `@/lib/triage`.
- **Exports**: a default `useTriage` hook.
