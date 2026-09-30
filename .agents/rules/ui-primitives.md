# 🎨 Rule: UI Primitives & Error Handling Standard

## 1. Global UI Primitives Specification (`src/core/components/`)
1. **`Button`**:
   - Props: `label`, `onPress`, `variant ('primary' | 'secondary' | 'danger' | 'outline')`, `isLoading`, `disabled`, `icon`.
   - Built with `Pressable` delivering active press feedback and opacity animations.
2. **`Input`**:
   - Props: `label`, `value`, `onChangeText`, `placeholder`, `error`, `leftIcon`, `rightIcon`.
   - Renders top-aligned label and bottom red error text consistently.
3. **`LoadingSkeleton`**:
   - Shimmer animation placeholder component for content loading states.
4. **`Toast`**:
   - Floating top notification component for `Success`, `Error`, and `Info` feedback.
5. **`OfflineBanner`**:
   - Top banner that automatically renders when device network connectivity is lost (`@react-native-community/netinfo`).
6. **`ErrorBoundary`**:
   - Class component catching unhandled JS runtime render errors, displaying a user-friendly fallback screen instead of crashing with a RedScreen/White Screen of Death.
