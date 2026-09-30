# 💾 Rule: Client State & Storage Persistence Standard

## 1. Separation of Server vs Client State
- **Server State**: All data fetched from external REST APIs MUST be managed exclusively by **TanStack React Query**, not Zustand.
- **Client State**: Local UI state (e.g. cart items, favorites list, session state, app theme, user language preference) MUST be managed via **Zustand**.

## 2. Zustand Store Persistence Rule
- Utilize the `persist` middleware with `createJSONStorage(() => AsyncStorage)` for stores requiring local disk persistence:
  ```typescript
  export const useProductCartStore = create<CartState>()(
    persist(
      (set, get) => ({ ... }),
      {
        name: '@product_cart_storage',
        storage: createJSONStorage(() => AsyncStorage),
      }
    )
  );
  ```
- Storage key names MUST be unique and prefixed with `@` (e.g., `@auth_session`, `@product_cart_storage`).
