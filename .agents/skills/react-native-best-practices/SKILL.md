---
name: react-native-best-practices
description: Industry-grade React Native Performance, Architectural Best Practices & Profiling Skill inspired by Callstack, Shopify, and Vercel guidelines.
---

# 🚀 Skill: React Native Best Practices & Optimization Architecture

## 📌 Skill Overview
Use this skill when designing, refactoring, or optimizing high-performance React Native components, managing large list renderings, tuning 60/120 FPS UI animations, and eliminating JS Thread bottlenecks.

---

## 📚 0. Industry References & Authoritative Sources
This skill is derived from world-class React Native engineering standards and published industry benchmarks:
- **Callstack**: *The Ultimate Guide to React Native Optimization* (Official Callstack Engineering Handbook for JS Thread offloading, Hermes profiling, and memory benchmarks).
- **Shopify**: *FlashList Engineering Guidelines & View Recycling Architecture* (Shopify E-Commerce Mobile Performance & List Recycling Standards).
- **Vercel**: *React State Management & Atomic Selector Design Patterns* (Server-state vs Client-state boundary isolation).

---

## ⚡ 1. Rendering & List Optimization (Callstack & Shopify Guidelines)

### A. FlatList / FlashList Benchmarks
- **`getItemLayout`**: Always provide `getItemLayout` for fixed-height list items to skip dynamic layout measurement calculations.
- **`keyExtractor`**: Always use unique string IDs. **NEVER** use array indices `(item, index) => index` if lists can be sorted, filtered, or mutated.
- **`removeClippedSubviews`**: Enable `removeClippedSubviews={Platform.OS === 'android'}` to unmount off-screen list view items from memory.
- **`maxToRenderPerBatch` & `windowSize`**:
  - `maxToRenderPerBatch`: Set between `5` and `10`.
  - `windowSize`: Set between `5` (5 screen heights) and `11`. The default value of 21 consumes excessive memory on low-end devices.

```typescript
// ✅ BEST PRACTICE: Callstack & Shopify FlatList Optimization
<FlatList
  data={products}
  keyExtractor={(item) => item.id.toString()}
  renderItem={renderProductItem}
  initialNumToRender={8}
  maxToRenderPerBatch={5}
  windowSize={5}
  removeClippedSubviews={Platform.OS === 'android'}
/>
```

### B. Memoization & Anonymous Functions
- **No Inline Functions in Props**: Avoid `<Button onPress={() => handlePress(id)} />` inside `renderItem` or long list iterations. Use `useCallback` or pass item IDs directly to memoized child components.
- **No Inline Style Objects**: Avoid inline style objects like `style={{ marginTop: 10, flex: 1 }}` during the render phase. Define static stylesheet objects using `StyleSheet.create`.

---

## 🎨 2. Animation & UI Thread Offloading (Reanimated 3 & Gesture Handler)

- **UI Thread Worklets**: Always use `react-native-reanimated` for complex UI animations. Reanimated animations run 100% on the native UI Thread via Worklets.
- **`useDerivedValue` & `useAnimatedStyle`**: Use `useAnimatedStyle` to transform `sharedValue` properties without bridging calls back to the JS thread.

```typescript
// ✅ BEST PRACTICE: Reanimated 3 Worklet
const animatedStyle = useAnimatedStyle(() => {
  return {
    transform: [{ translateY: withSpring(translationY.value) }],
    opacity: interpolate(translationY.value, [0, 100], [1, 0]),
  };
});
```

---

## 🧠 3. Memory & State Management Best Practices (Zustand & React Query)

- **Atomic Selectors in Zustand**: Avoid subscribing to entire store objects `const store = useStore()`. Use atomic selectors `const user = useStore((state) => state.user)` to prevent component re-renders when unrelated store properties change.
- **React Query Garbage Collection (`gcTime` & `staleTime`)**:
  - `staleTime`: Default to `5 * 60 * 1000` (5 minutes) for infrequently changing server data.
  - `gcTime`: Set to `10 * 60 * 1000` (10 minutes) to unmount unused query caches from memory.

---

## 🔍 4. Profiling & Performance Audit Workflow

When diagnosing UI frame drops (*jank*):
1. **React DevTools Profiler**: Inspect which components re-render excessively.
2. **Flipper / React Native DevMenu**: Monitor JS Thread FPS vs UI Thread FPS. The JS thread should not drop below 55 FPS during list scrolling.
3. **Hermes Memory Profiler**: Analyze heap memory snapshots to identify memory leaks from uncleaned event listeners or subscriptions.
