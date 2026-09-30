# 🏛️ Rule: Architecture, Component Hierarchy & Co-location Standard

## 1. Modular Feature-First Rules
- All application code MUST be structured into two primary root directories:
  - `src/core/`: Shared global infrastructure, theme, utilities, and primitives.
  - `src/features/<feature_name>/`: Self-contained business domain modules.
- A feature module **MUST NOT** directly import private components or helpers from another feature module. If a component or utility is required across multiple features, promote it to `src/core/`.

## 2. Co-Located Component Folder Pattern Rules
- Every component, section, screen, or container **MUST** reside inside its own dedicated directory following this exact layout:
  ```text
  MyComponent/
  ├── index.ts                 # Clean re-export barrel
  ├── MyComponent.tsx          # Primary Component Implementation
  ├── MyComponent.test.tsx     # Co-located Jest + RNTL Tests
  └── MyComponent.styles.ts    # Dedicated StyleSheet (Mandatory)
  ```
- The `index.ts` file MUST only perform clean named re-exports: `export { MyComponent } from './MyComponent';`.

## 3. Component Responsibility Matrix (`Screen` -> `Container` -> `Section` -> `Component`)

- **`screens/`**: Page Route Target (Next.js `page.tsx` Equivalent). Registered directly in `React Navigation` (`Stack.Screen component={ProductListScreen}`). Responsible for configuring navigation header options, status bar, screen orientation, safe area boundaries, parsing `route.params`, and rendering the inner `<ProductListContainer />`.
- **`containers/`**: Page Data & Inter-Section State Orchestrator. Sits inside `Screen`. Executes TanStack React Query hooks (`useQuery`, `useMutation`), connects to global Zustand stores, manages local modal/toast states, and coordinates state communication between sub-sections (`Sections`).
- **`sections/`**: Stateful Sub-Module Sections / Fragments (`HeroSection`, `ProductGridSection`, `ProductFormModalSection`). Manages localized UI layout logic (e.g. `FlatList` with shimmer skeleton, form modal with `react-hook-form` + `zod`), and feeds pure props down to `components/`.
- **`components/`**: Pure Visual Domain UI (`Button`, `Input`, `ProductCard`). **ZERO hardcoded data or text**. 100% of data, labels, and callbacks MUST enter via props from the `sections/` or `containers/` layer.
