# 🏛️ Rule: SOLID Principles & Code Quality Standards

## 📌 Purpose
This document enforces the **5 SOLID Engineering Principles** and automated **Code Quality Verification Gates** for AI Agents and developers when generating or refactoring React Native application code.

---

## 🏛️ 1. SOLID Engineering Principles

Every generated component, service, and hook MUST strictly adhere to SOLID principles:

1. **Single Responsibility Principle (SRP)**:
   - `Screen`: Handles page route target and React Navigation options only.
   - `Container`: Handles section layout orchestration and inter-section store coordination only.
   - `Sections`: Handles React Query hooks, Zustand store listeners, and local form/modal state only.
   - `Components`: Pure visual UI rendering. **Zero hardcoded data or text**.
2. **Open/Closed Principle (OCP)**:
   - Base UI primitives (`Button`, `Input`, `Toast`) MUST be extensible via props/variants without mutating internal source code.
3. **Liskov Substitution Principle (LSP)**:
   - Subtypes or mock service implementations (e.g. `MockProductService`) MUST seamlessly substitute real services in Jest test suites without breaking component contracts.
4. **Interface Segregation Principle (ISP)**:
   - Components MUST NOT be forced to accept bloated props objects they do not consume (e.g., avoid passing an entire `user` payload when a component only requires `avatarUrl`).
5. **Dependency Inversion Principle (DIP)**:
   - High-level UI components MUST depend on abstractions (Custom Hooks & Service Contracts) rather than concrete global singletons or mutable instances.

---

## 🔍 2. AI Agent Self-Quality Audit Checklist

Before declaring any coding task complete, the AI Agent MUST audit generated code against this quality gate:

### A. Architecture & Co-location
- [ ] Is the component correctly categorized under `components/`, `sections/`, `screens/`, or `containers/`?
- [ ] Is the Co-located Component Folder Pattern (`index.ts`, `Component.tsx`, `Component.test.tsx`) strictly followed?
- [ ] Are circular dependencies avoided?

### B. Type Safety & TypeScript
- [ ] Is the use of `any` 100% eliminated?
- [ ] Are all API response DTOs, props, and navigation parameters explicitly typed?
- [ ] Does `npx tsc --noEmit` pass with zero compilation errors?

### C. Performance & Memory Safety
- [ ] Are `FlatList` callbacks memoized using `useCallback`?
- [ ] Are inline object/array instantiations inside JSX render trees avoided?
- [ ] Do `useEffect` hooks return appropriate cleanup functions for listeners, timers, or subscriptions?

### D. Automated Test Coverage
- [ ] Is a co-located unit test (`Component.test.tsx`) created and passing?
- [ ] Does `npm test` execute with 100% passing test suites?
