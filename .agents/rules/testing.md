# 🧪 Rule: Testing, Co-located Test Files & Custom Render Standard

## 1. Co-located Test File Location Rule
- Every component, fragment, container, and screen test file **MUST** reside directly inside the component's directory.
  - `ProductCard/ProductCard.tsx` ➔ `ProductCard/ProductCard.test.tsx`
  - `LoginContainer/LoginContainer.tsx` ➔ `LoginContainer/LoginContainer.test.tsx`
- Pure utility function unit tests MUST be co-located with their utility module (`formatters.ts` ➔ `formatters.test.ts`).

## 2. Custom Render Wrapper Rule (`renderWithProviders`)
When testing `Screens`, `Containers`, or stateful `Fragments` requiring Query Client, Navigation Context, or i18n providers, you **MUST** use `renderWithProviders` from `src/core/utils/test-utils.tsx`:

```tsx
import { renderWithProviders } from '@core/utils/test-utils';
import { ProductListScreen } from './ProductListScreen';

describe('ProductListScreen', () => {
  it('renders list of products correctly', () => {
    const { getByText } = renderWithProviders(
      <ProductListScreen products={mockProducts} isLoading={false} />
    );
    expect(getByText('iPhone 15')).toBeTruthy();
  });
});
```

## 3. Mocking Rule
- All external HTTP API requests MUST be mocked via `jest.mock('@core/api/client')` or MSW handlers.
- Test suites must execute deterministically and remain 100% independent of live network connections.
