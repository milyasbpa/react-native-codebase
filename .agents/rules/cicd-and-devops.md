# 🚀 Rule: CI/CD & DevOps Automation (EAS Build & GitHub Actions)

## 📌 Context
Automated Continuous Integration and Continuous Deployment (CI/CD) pipelines guarantee that every commit and Pull Request is automatically verified before merging and deploying via Expo Application Services (EAS).

---

## 🛠️ 1. GitHub Actions CI Pipeline Specifications (`.github/workflows/ci.yml`)

The CI pipeline MUST trigger automatically on `pull_request` events and direct `push` commits to `main` and `develop` branches.

### Stage 1: Code Quality Gate
1. **Checkout & Node.js Setup**: Node.js 20.x with `npm` package caching enabled.
2. **Install Dependencies**: `npm ci --frozen-lockfile`.
3. **Linting**: `npm run lint` (ESLint strict check).
4. **Typecheck**: `npx tsc --noEmit` (TypeScript strict check).

### Stage 2: Automated Testing Gate
1. **Jest Unit & Integration Tests**: `npm test -- --ci --coverage --maxWorkers=2`.
2. **Coverage Artifact**: Upload test coverage reports to GitHub Workflow Summaries & Codecov.

### Stage 3: Security & Dependency Vulnerability Audit
1. **Security Audit**: `npm audit --audit-level=high`.

---

## 📱 2. EAS Build & Deployment Specifications (`eas.json`)

The `eas.json` configuration structures application builds across 3 core environment profiles:

```json
{
  "cli": {
    "version": ">= 7.0.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "ios": {
        "simulator": true
      }
    },
    "preview": {
      "distribution": "internal",
      "channel": "staging",
      "env": {
        "APP_ENV": "staging"
      }
    },
    "production": {
      "distribution": "store",
      "channel": "production",
      "autoIncrement": true,
      "env": {
        "APP_ENV": "production"
      }
    }
  },
  "submit": {
    "production": {}
  }
}
```

---

## 🌿 3. Git Branching Strategy & Pre-commit Hooks

### Branching Model
- `main` / `master`: Production-ready branch. Protected (requires 1 Tech Lead approval & passing CI checks).
- `develop`: Staging & integration branch.
- `feat/<feature-name>`: Feature branch.
- `fix/<bug-name>`: Bugfix branch.

### Husky & lint-staged (Pre-commit Automation)
- Before accepting a local commit, `lint-staged` automatically executes:
  1. `eslint --fix` on staged `.ts` and `.tsx` files.
  2. `prettier --write` on staged Markdown, JSON, and TypeScript files.
  3. `npx tsc --noEmit` to verify type safety.
