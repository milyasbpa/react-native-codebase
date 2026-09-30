# 🛡️ Rule: Security & Enterprise Compliance Standards

## 📌 Context
All React Native applications MUST comply with strict enterprise mobile application security standards (OWASP MASVS - Mobile Application Security Verification Standard).

---

## 🔒 1. Secure Data Storage
- **Sensitive Storage**: Auth tokens (JWT), Refresh Tokens, Encryption Keys, and PII (Personally Identifiable Information) **MUST** be stored using `expo-secure-store` (iOS Keychain / Android KeyStore backed by hardware-level AES-256 encryption).
- **Non-Sensitive Storage**: UI caches & visual preferences may use `@react-native-async-storage/async-storage`, but **MUST NEVER** store plaintext credentials, tokens, or sensitive user data.
- **Biometric Authentication**: For sensitive financial or private user views, integrate `expo-local-authentication` with a biometric/PIN fallback mechanism.

```typescript
// ✅ SECURE: expo-secure-store
import * as SecureStore from 'expo-secure-store';

export const saveAuthToken = async (token: string): Promise<void> => {
  await SecureStore.setItemAsync('user_jwt_token', token, {
    keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
  });
};
```

---

## 🌐 2. Network Security & API Hardening
- **HTTPS Enforcement**: Exclusively allow communications over secure `https://` protocols. Insecure HTTP cleartext traffic MUST be disabled in `app.json` (`usesCleartextTraffic: false`).
- **SSL / TLS Pinning**: For production environments, configure Network Security Configuration (Android) and App Transport Security (iOS) with Certificate / Public Key Pinning.
- **Header Sanitization & Injection Prevention**:
  - Strip authorization headers from client-side crash log output.
  - Parameterize all REST API query parameters and URI encode values.
- **Request Timeout**: Always specify `timeout: 10000` (10 seconds) on the Axios HTTP instance to prevent hanging connections.

---

## 🧹 3. Input Sanitization & Data Protection
- **Injection Protection**: Validate and sanitize all user input values using `Zod` schemas before sending payloads to backend servers or updating state.
- **Screen Capture Protection**: For highly sensitive screens (e.g. PIN entry, Payment details), enable screenshot prevention flags (iOS `isCaptured` check, Android `FLAG_SECURE`).
- **Log Masking & Production Stripping**:
  - `console.log` statements **MUST** be automatically stripped out during production builds using `babel-plugin-transform-remove-console`.
  - Scrub passwords, tokens, or national ID numbers from Sentry/Bugsnag crash reporting payloads.

---

## ⚖️ 4. Compliance & Audit Checklist
1. **No Hardcoded Secrets**: Storing API Keys, Secret Keys, or DB Credentials directly in source code is strictly prohibited. Utilize `.env` with `expo-constants` or `react-native-dotenv`.
2. **Dependency Vulnerability Audit**: Execute `npm audit` periodically in CI pipelines to block high/critical CVE vulnerabilities.
3. **Session Inactivity Timeout**: Implement an auto-logout timer when the application remains in the background for more than 15 minutes.
