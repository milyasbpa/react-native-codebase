# ♿ Rule: Accessibility (a11y) & Touch Target Standard

## 1. Minimum Touch Target Size (44x44 dp)
- All pressable interactive elements (buttons, icon buttons, checkboxes, link texts) MUST maintain a minimum touch target area of **44x44 dp**.
- If the visual icon or button is small (e.g., a 16x16 px close icon), apply `hitSlop={12}` or wrap inside a `Pressable` to expand the touch target region without shifting visual alignment.

## 2. Screen Reader Properties Rule
- All interactive components MUST explicitly specify proper screen reader accessibility properties:
  ```tsx
  <Pressable
    accessible={true}
    accessibilityRole="button"
    accessibilityLabel="Delete product iPhone 15"
    accessibilityHint="Double tap to remove this item from the product catalog"
    onPress={handleDelete}
  >
    <Text>✕</Text>
  </Pressable>
  ```
- Section headers MUST declare `accessibilityRole="header"`.
- Search inputs MUST declare `accessibilityRole="search"`.

## 3. Dynamic Font Scaling
- Ensure text elements degrade gracefully without ugly text clipping or layout distortion when users increase OS system font scaling (iOS Dynamic Type / Android Font Scale).
