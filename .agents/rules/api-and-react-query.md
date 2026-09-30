# ⚡ Rule: API Client, React Query & Optimistic Updates Standard

## 1. Axios Client & Interceptors Standard
- All REST API HTTP calls MUST utilize the configured Axios instance located in `src/core/api/client.ts`.
- **Request Interceptor**: Automatically injects the `Authorization: Bearer <token>` header retrieved securely from `useAuthStore`.
- **Response Interceptor**: Automatically normalizes HTTP errors into a uniform `ApiError` interface:
  ```typescript
  export interface ApiError {
    message: string;
    status: number;
    code?: string;
  }
  ```

## 2. Query Key Factory Pattern Rule
- Every feature module **MUST** define a Query Key Factory object in `services/keys.ts`:
  ```typescript
  export const productKeys = {
    all: ['products'] as const,
    lists: () => [...productKeys.all, 'list'] as const,
    list: (filters: Record<string, unknown>) => [...productKeys.lists(), filters] as const,
    details: () => [...productKeys.all, 'detail'] as const,
    detail: (id: string | number) => [...productKeys.details(), id] as const,
  };
  ```
- Hardcoded inline string query keys such as `useQuery({ queryKey: ['productsList'] })` are strictly forbidden.

## 3. Optimistic Update Standard
When implementing data mutations (`useMutation`) for Create, Update, or Delete operations:
1. `onMutate`: Call `queryClient.cancelQueries()`, snapshot previous cache data, and instantly apply optimistic cache updates via `queryClient.setQueryData()`.
2. `onError`: Rollback cache state using the saved snapshot in case of a server or network failure.
3. `onSettled`: Invalidate affected queries via `queryClient.invalidateQueries()` to re-sync state with the server.
