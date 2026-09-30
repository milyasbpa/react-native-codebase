# 🎨 Rule: Design System Tokens & Co-located StyleSheets Standard

## 1. Zero Hardcoded Layout Numbers & Inline Magic Styles
- **Rule**: All styling properties across components, sections, screens, and containers **MUST** consume design system tokens from `@core/theme` (`colors`, `spacing`, `typography`, `borderRadius`, `layout`).
- **Forbidden**: Hardcoded numbers for `margin`, `padding`, `fontSize`, `borderRadius`, `height`, or `width` (e.g. `margin: 16` ❌ vs `margin: spacing.lg` ✅).

## 2. Mandatory Co-located `[Component].styles.ts` Separation
- **Rule**: No component file (`[Component].tsx`) is permitted to call `StyleSheet.create` directly in the component implementation file.
- **Enforcement**: All styles MUST be decoupled into a dedicated co-located file named `[Component].styles.ts` in the exact same directory:
  ```text
  Button/
  ├── index.ts
  ├── Button.tsx
  ├── Button.styles.ts      # Dedicated StyleSheet file using @core/theme tokens
  └── Button.test.tsx
  ```
- **Import Pattern**: `Button.tsx` imports `styles` from `./Button.styles`.
