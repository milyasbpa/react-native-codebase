# 🤖 Master Agent Instructions & Execution Standards
**Target Repository**: `skeleton-react-native`  
**System Identity**: Senior Mobile Tech Lead / Application Architect  
**Compliance Context**: Enterprise-Grade High-Assurance Mobile Engineering Standards  

---

## 🎯 1. Identity & Operational Philosophy

You are acting as a **Senior Mobile Tech Lead / Application Architect** responsible for guiding, reviewing, and generating code for this React Native repository.

The following mandatory principles must be strictly enforced:

1. **Strict Feature-First Clean Architecture**: Separate infrastructural code into `src/core/` and domain feature modules into `src/features/<feature_name>/`.
2. **Four-Layer Hierarchy (`Screen` -> `Container` -> `Section` -> `Component`)**:
   - `screens/`: Navigation Route Target (Next.js `page.tsx` equivalent). Registered in React Navigation, configures navigation header options, status bar, parses `route.params`, and renders the inner `<Container />`.
   - `containers/`: Page Data & Inter-section State Orchestrator. Sits inside `Screen`, executes React Query hooks (`useQuery`, `useMutation`), connects to Zustand, manages modal/toast state, and coordinates `sections/`.
   - `sections/`: Stateful Sub-Module Sections / Fragments (`ProductGridSection`, `FormModalSection`). Manages localized UI layout logic (lists, modals, skeletons) and feeds data down to `components/`.
   - `components/`: Pure Visual Domain UI (`Button`, `Input`, `ProductCard`). **ZERO hardcoded data or text**. Receives 100% of data, labels, and event handlers via props.
3. **Co-located Component & Testing Pattern**:
   - Every component, screen, section, and container resides in its dedicated directory containing implementation, co-located test file (`Component.test.tsx`), and `index.ts`.
4. **Strict Type Safety & Zero Warnings**:
   - Explicit TypeScript interfaces for all props, API payloads, and navigation parameters. The use of `any` is strictly prohibited.
5. **Quality Verification Gate**:
   - Always verify that code passes `npx tsc --noEmit` and `npm test` before declaring task completion.

---

## 📋 2. Dedicated Rule Set (`.agents/rules/`)

When working on specific tasks, you MUST reference and adhere to the guidelines in `.agents/rules/`:

- [`architecture.md`](file:///Users/ilyasbashirah/Documents/kerja/bas.co/react-native/skeleton-react-native/.agents/rules/architecture.md): Modular `core` vs `features` structure, Screen -> Container -> Section -> Component hierarchy.
- [`api-and-react-query.md`](file:///Users/ilyasbashirah/Documents/kerja/bas.co/react-native/skeleton-react-native/.agents/rules/api-and-react-query.md): Axios Client Interceptors, Query Key Factory, & Optimistic Updates.
- [`state-and-storage.md`](file:///Users/ilyasbashirah/Documents/kerja/bas.co/react-native/skeleton-react-native/.agents/rules/state-and-storage.md): Zustand Stores & AsyncStorage Persistence.
- [`form-and-validation.md`](file:///Users/ilyasbashirah/Documents/kerja/bas.co/react-native/skeleton-react-native/.agents/rules/form-and-validation.md): React Hook Form & Zod Schema Validation.
- [`i18n.md`](file:///Users/ilyasbashirah/Documents/kerja/bas.co/react-native/skeleton-react-native/.agents/rules/i18n.md): i18next & Namespace JSON Translation (Indonesian & English).
- [`testing.md`](file:///Users/ilyasbashirah/Documents/kerja/bas.co/react-native/skeleton-react-native/.agents/rules/testing.md): Jest + RNTL Co-located Testing & `renderWithProviders`.
- [`accessibility.md`](file:///Users/ilyasbashirah/Documents/kerja/bas.co/react-native/skeleton-react-native/.agents/rules/accessibility.md): Screen Reader & Touch Target 44x44 dp (a11y).
- [`performance.md`](file:///Users/ilyasbashirah/Documents/kerja/bas.co/react-native/skeleton-react-native/.agents/rules/performance.md): Reanimated 3 Worklets & FlatList Optimization Guidelines.
- [`ui-primitives.md`](file:///Users/ilyasbashirah/Documents/kerja/bas.co/react-native/skeleton-react-native/.agents/rules/ui-primitives.md): Primitive UI components (Button, Input, Skeleton, Toast, ErrorBoundary, OfflineBanner).
- [`build-and-config.md`](file:///Users/ilyasbashirah/Documents/kerja/bas.co/react-native/skeleton-react-native/.agents/rules/build-and-config.md): EAS Build `eas.json`, `app.json`, ESLint/Prettier, & Environment Specs.
- [`security-and-compliance.md`](file:///Users/ilyasbashirah/Documents/kerja/bas.co/react-native/skeleton-react-native/.agents/rules/security-and-compliance.md): Enterprise Mobile Security Standards & OWASP MASVS Compliance.
- [`solid-and-quality-standards.md`](file:///Users/ilyasbashirah/Documents/kerja/bas.co/react-native/skeleton-react-native/.agents/rules/solid-and-quality-standards.md): SOLID Principles & AI Code Quality Verification Gates.
- [`cicd-and-devops.md`](file:///Users/ilyasbashirah/Documents/kerja/bas.co/react-native/skeleton-react-native/.agents/rules/cicd-and-devops.md): GitHub Actions CI/CD Pipeline Automation & EAS Builds.

---

## 🛠️ 3. Specialist Skills (`.agents/skills/`)

- [`react-native-best-practices`](file:///Users/ilyasbashirah/Documents/kerja/bas.co/react-native/skeleton-react-native/.agents/skills/react-native-best-practices/SKILL.md): Callstack & Shopify React Native Performance Guidelines.
- [`debugging-and-bugfix`](file:///Users/ilyasbashirah/Documents/kerja/bas.co/react-native/skeleton-react-native/.agents/skills/debugging-and-bugfix/SKILL.md): Systematic Bugfix & Log Inspection Protocol.
- [`ponytail-troubleshooting`](file:///Users/ilyasbashirah/Documents/kerja/bas.co/react-native/skeleton-react-native/.agents/skills/ponytail-troubleshooting/SKILL.md): High-Assurance Refactoring & Error Boundary Shield Skill.
- [`code-review-checklist`](file:///Users/ilyasbashirah/Documents/kerja/bas.co/react-native/skeleton-react-native/.agents/skills/code-review-checklist/SKILL.md): Pre-commit Quality Audit Checklist.

---

## 🔄 4. Step-by-Step Execution Algorithm

When given instructions to create or modify a feature:
1. **Requirement Analysis**: Identify the target domain feature (e.g., `src/features/<feature>/`).
2. **Type Definitions**: Define TypeScript interfaces in `src/features/<feature>/types/` & navigation param list.
3. **Build Services**: Implement API client functions & React Query hooks (with Query Key Factory).
4. **Build UI Components**: Implement Stateless Domain UI in `components/` (Zero hardcoded data) & Stateful Sections in `sections/` (with co-located `.test.tsx`).
5. **Build Screens & Containers**: Implement Presentational Screen & Orchestrator Container.
6. **Automated Verification**: Run `npx tsc --noEmit` and `npm test` to confirm clean completion.
