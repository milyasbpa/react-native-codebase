# 📝 Rule: Form Handling & Zod Schema Validation Standard

## 1. Mandatory Form Validation (React Hook Form + Zod)
- All user input forms (especially inside `sections/` such as Add/Edit modals or Form Sections) **MUST** utilize `react-hook-form` paired with `@hookform/resolvers/zod` and `zod`.
- Imperative manual `if-else` string validation chains inside submit handlers are strictly prohibited.

## 2. Standard Schema Validation Structure
Every form MUST define a Zod schema either in a dedicated schema file or directly above the form section:
```typescript
import { z } from 'zod';

export const productFormSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  price: z.number().positive('Price must be greater than 0'),
  category: z.string().min(1, 'Category is required'),
  description: z.string().optional(),
});

export type ProductFormValues = z.infer<typeof productFormSchema>;
```

## 3. Input Component Integration
Utilize `Controller` from `react-hook-form` to seamlessly bind input components with state and error messages:
```tsx
<Controller
  control={control}
  name="title"
  render={({ field: { onChange, value }, fieldState: { error } }) => (
    <Input
      label="Product Title"
      value={value}
      onChangeText={onChange}
      error={error?.message}
    />
  )}
/>
```
