---
name: ponytail-troubleshooting
description: High-Assurance Refactoring & Structural Safety Skill for Enterprise React Native Codebases.
---

# 🐴 Skill: High-Assurance Refactoring & Structural Safety

## 📌 Skill Overview
Use this skill when performing large-scale architectural refactoring (such as migrating legacy Redux state to Zustand, restructuring directory layouts to Feature-First, or upgrading navigation primitives) without breaking existing functionality (Zero Regression Assurance).

---

## 📚 0. Industry References & Authoritative Sources
This skill is derived from enterprise software refactoring and fault-tolerance patterns:
- **Martin Fowler**: *Refactoring: Improving the Design of Existing Code* (Behavioral Equivalence & Micro-Step Refactoring Discipline).
- **React Architecture Core**: *Error Boundaries & Graceful Fault Isolation Patterns* (Preventing White Screen of Death crash cascades).

---

## 🛡️ 1. Core Principles of High-Assurance Refactoring

1. **Behavioral Equivalence**: Refactoring ONLY alters the internal structural organization of code without mutating external input/output contracts or runtime side effects.
2. **Safety Net First (Unit Test Shield)**: Modifying production code before ensuring that all existing test suites for the target module are in a `PASSING` state is strictly prohibited.
3. **Incremental Micro-Steps**: Perform refactoring in small, sequential, verifiable commits rather than one massive monolithic rewrite.

---

## 📋 2. Component Protection & Error Boundary Matrix

When refactoring major UI Screens or Container modules:

### A. Fallback Protection via Global & Local Error Boundaries
Every primary Screen and Modal Fragment MUST be wrapped inside an `ErrorBoundary` component to gracefully intercept unhandled rendering exceptions without crashing into a White Screen of Death (WSOD).

```typescript
// ✅ SAFE REFACTORING PATTERN: Error Boundary Shield
import React from 'react';
import { ErrorBoundary } from '@core/components/ErrorBoundary';
import { ProductListContainer } from './containers/ProductListContainer';

export const ProductListScreen: React.FC = () => {
  return (
    <ErrorBoundary fallbackTitle="Failed to load products">
      <ProductListContainer />
    </ErrorBoundary>
  );
};
```

### B. Safe Optional Props & Defensive Parsing
When updating data contracts or API DTOs:
- Provide explicit default fallback values inside Zod schemas or Custom Hooks.
- Prevent crashes caused by `TypeError: Cannot read property 'map' of undefined`.

---

## 🔄 3. Step-by-Step Safe Refactoring Protocol

1. **Dependency Audit**: Perform a symbol search (`grep_search`) to locate every file referencing the component, hook, or service scheduled for refactoring.
2. **Duplicate & Deprecate (Parallel Execution)**: For major breaking interface changes, create a new version (e.g. `useProductV2`) alongside the existing hook until all consumer references are migrated.
3. **Verify API Contract Compatibility**: Ensure Data Transfer Objects (DTOs) remain backward-compatible.
4. **Execute Unit Tests**: Run `npm test` after every micro-refactoring step to confirm zero regressions.
