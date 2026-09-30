import React from 'react';
import { Modal, View, Text } from 'react-native';
import { Button } from '@core/components/Button';
import { Product } from '../../types/product';
import { styles } from './ProductDeleteDialogSection.styles';

export interface ProductDeleteDialogSectionProps {
  product: Product | null;
  visible: boolean;
  onCancel: () => void;
  onConfirm: (product: Product) => void;
  isLoading?: boolean;
  title?: string;
  message?: string;
}

export const ProductDeleteDialogSection: React.FC<ProductDeleteDialogSectionProps> = React.memo(
  ({
    product,
    visible,
    onCancel,
    onConfirm,
    isLoading = false,
    title = 'Delete Product',
    message = 'Are you sure you want to delete this product?',
  }) => {
    if (!product) return null;

    return (
      <Modal visible={visible} transparent animationType="fade" onRequestClose={onCancel}>
        <View style={styles.overlay}>
          <View style={styles.dialog} testID="delete-dialog">
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.message}>{message}</Text>
            <Text style={styles.productName}>{product.title}</Text>
            <View style={styles.buttonRow}>
              <Button label="Cancel" onPress={onCancel} variant="outline" style={styles.halfButton} />
              <Button
                label="Delete"
                onPress={() => onConfirm(product)}
                variant="danger"
                isLoading={isLoading}
                style={styles.halfButton}
                testID="confirm-delete-button"
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  },
);

ProductDeleteDialogSection.displayName = 'ProductDeleteDialogSection';
