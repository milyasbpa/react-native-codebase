# ⚡ Rule: Performance Optimization (Callstack & Shopify Guidelines)

## 1. Re-render Prevention Rules
- Wrap Stateless Domain UI components with `React.memo` when rendered frequently inside large lists:
  ```tsx
  export const ProductCard = React.memo(({ product, onPress }: ProductCardProps) => { ... });
  ```
- All event handler callbacks passed down as props MUST be wrapped in `useCallback`.
- Expensive computational calculations or array filtering operations MUST be memoized with `useMemo`.

## 2. FlatList Optimization Rules
- Every `FlatList` component rendering dataset lists MUST configure performance props explicitly:
  ```tsx
  <FlatList
    data={products}
    keyExtractor={(item) => item.id.toString()}
    initialNumToRender={8}
    maxToRenderPerBatch={8}
    windowSize={5}
    removeClippedSubviews={Platform.OS === 'android'}
    renderItem={renderProductItem}
  />
  ```
- The `renderItem` prop MUST NOT be passed an inline anonymous arrow function in the JSX render tree. Create a memoized render callback via `useCallback`.

## 3. Reanimated Worklets Rule
- All UI-heavy interactive animations MUST run on the **Native UI Thread** using `react-native-reanimated` worklets (`useSharedValue`, `useAnimatedStyle`, `withSpring`, `withTiming`). Triggering React JS Thread re-renders for gestures is strictly prohibited.
