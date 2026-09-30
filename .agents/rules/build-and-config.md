# ⚙️ Rule: Build Configurations & Environment Setup Standard

## 1. EAS Build Configuration (`eas.json`)
Every project repository MUST maintain an `eas.json` configuration file defining 3 distinct build profiles:
- **`development`**: For internal development client builds (`developmentClient: true`).
- **`preview`**: For staging/internal distribution builds (`.apk` for Android, TestFlight/AdHoc for iOS).
- **`production`**: For store submission artifacts (`.aab` for Google Play Store, `.ipa` for Apple App Store).

## 2. App Scheme & Deep Linking (`app.json`)
- MUST configure `"scheme": "myapp"` (or the project app scheme) inside `app.json` for deep linking routing support.

## 3. Path Aliases (`babel.config.js` & `tsconfig.json`)
Path aliases MUST be synchronized between TypeScript and Babel configuration files:
```json
"paths": {
  "@core/*": ["./src/core/*"],
  "@features/*": ["./src/features/*"],
  "@assets/*": ["./src/assets/*"]
}
```

## 4. ESLint & Prettier Rules
- MUST maintain `.eslintrc.js` and `.prettierrc` for codebase consistency.
- Execute `npm run lint` for automated style checks and auto-formatting prior to committing.
