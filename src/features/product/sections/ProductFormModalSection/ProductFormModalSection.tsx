import React from 'react';
import { Modal, View, Text, Pressable } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@core/components/Input';
import { Button } from '@core/components/Button';
import { CreateProductDTO } from '../../types/product';
import { styles } from './ProductFormModalSection.styles';

export const productSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  price: z.number().positive('Price must be greater than 0'),
  category: z.string().min(1, 'Category is required'),
  description: z.string().optional(),
});

export type ProductFormValues = z.infer<typeof productSchema>;

export interface ProductFormModalSectionProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: CreateProductDTO) => void;
  isLoading?: boolean;
  title?: string;
}

export const ProductFormModalSection: React.FC<ProductFormModalSectionProps> = React.memo(
  ({ visible, onClose, onSubmit, isLoading = false, title = 'Add New Product' }) => {
    const {
      control,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<ProductFormValues>({
      resolver: zodResolver(productSchema),
      defaultValues: {
        title: '',
        price: 0,
        category: 'smartphones',
        description: '',
      },
    });

    const handleFormSubmit = (values: ProductFormValues) => {
      onSubmit(values);
      reset();
      onClose();
    };

    return (
      <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
        <View style={styles.overlay}>
          <View style={styles.container} testID="product-form-modal">
            <View style={styles.header}>
              <Text style={styles.title}>{title}</Text>
              <Pressable onPress={onClose} hitSlop={12}>
                <Text style={styles.closeText}>✕</Text>
              </Pressable>
            </View>

            <Controller
              control={control}
              name="title"
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Title"
                  placeholder="Enter product title"
                  value={value}
                  onChangeText={onChange}
                  error={errors.title?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="price"
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Price"
                  placeholder="Enter price"
                  value={value ? value.toString() : ''}
                  onChangeText={(val) => onChange(Number(val) || 0)}
                  keyboardType="numeric"
                  error={errors.price?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="category"
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Category"
                  placeholder="Enter category"
                  value={value}
                  onChangeText={onChange}
                  error={errors.category?.message}
                />
              )}
            />

            <View style={styles.buttonRow}>
              <Button label="Cancel" onPress={onClose} variant="outline" style={styles.halfButton} />
              <Button
                label="Save Product"
                onPress={handleSubmit(handleFormSubmit)}
                isLoading={isLoading}
                style={styles.halfButton}
                testID="submit-modal-button"
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  },
);

ProductFormModalSection.displayName = 'ProductFormModalSection';
