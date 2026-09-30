---
name: code-review-checklist
description: Pre-commit & Pull Request Quality Audit Skill for Senior React Native Engineers & Tech Leads.
---

# 📋 Skill: Pre-Commit & Code Review Audit Checklist

## 📌 Skill Overview
Use this skill prior to committing code or opening Pull Requests (PRs) to verify that all code modifications satisfy 100% of quality, security, performance, accessibility, commit conventions, and type-safety engineering standards.

---

## 📚 0. Industry References & Authoritative Sources
This audit checklist incorporates standard enterprise review guidelines:
- **OWASP**: *Mobile Application Security Verification Standard (MASVS v2.0)* (SecureStore, HTTPS, Log Stripping).
- **Conventional Commits**: *Conventional Commits Specification v1.0.0 (Commitlint Standard)*.
- **W3C / WAI-ARIA**: *Mobile Accessibility (a11y) & 44x44 dp Touch Target Guidelines*.

---

## 🔍 1. Mandatory Audit Checklist (Pre-Commit Quality Gate)

### 🛠️ A. Quality & TypeScript Standards
- [ ] Does `npx tsc --noEmit` pass without a single TypeScript error?
- [ ] Does `npm test` pass with 100% of test suites passing?
- [ ] Is the Co-located Component Folder Pattern (`index.ts`, `Component.tsx`, `Component.test.tsx`) strictly enforced?
- [ ] Are unused variables, dead code, and commented-out code blocks completely removed?

### 🛡️ B. Security & Compliance Audit (OWASP MASVS)
- [ ] Are sensitive tokens/credentials stored in `expo-secure-store` (never AsyncStorage)?
- [ ] Are all user inputs validated using `Zod` schemas?
- [ ] Do all network requests enforce `https://` protocols?
- [ ] Is `.env` included in `.gitignore`?

### ⚡ C. Performance & React Native UI Audit
- [ ] Are callbacks inside `FlatList` memoized using `useCallback`?
- [ ] Does `keyExtractor` extract unique string IDs (never array indices)?
- [ ] Are complex UI animations offloaded to `react-native-reanimated` worklets?
- [ ] Do image components declare explicit dimensions and fallback source handlers?

### ♿ D. Accessibility (a11y) Audit
- [ ] Do interactive elements (Button, Card, Pressable) declare `accessible={true}` and descriptive `accessibilityLabel` attributes?
- [ ] Do touch targets satisfy the minimum 44x44 dp size requirement?

### 🌿 E. Git & Conventional Commit Audit (Commitlint Standard)
- [ ] Do commit messages strictly follow the Conventional Commits format: `<type>(<scope>): <short description>`?
      - Allowed types: `feat`, `fix`, `refactor`, `docs`, `test`, `style`, `perf`, `chore`, `ci`.
      - Examples: `feat(product): add optimistic cart creation`, `fix(auth): resolve secure storage token retrieval`.
- [ ] Is the PR title and description concise, referencing issue IDs and co-located unit test results?

---

## 🚦 2. Audit Report Output Standard

After executing an audit using this skill, summarize the results in the following format:

```markdown
### 📊 Pre-Commit Quality Audit Results:
- **TypeScript Strict Check**: ✅ PASSED (0 Compilation Errors)
- **Jest Unit Tests**: ✅ PASSED (100% Test Suite Passing)
- **Security Audit (OWASP)**: ✅ PASSED (SecureStore & HTTPS Verified)
- **Accessibility Audit**: ✅ PASSED (Screen Reader Labels & 44x44 dp Target Verified)
- **Commitlint Audit**: ✅ PASSED (Conventional Commit Format Verified)
- **Status**: 🟢 READY FOR COMMIT / PULL REQUEST MERGE
```
