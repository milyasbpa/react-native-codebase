import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { ProductFilterBar } from '../../components/ProductFilterBar';
import { ProductGridSection } from '../../sections/ProductGridSection';
import { ProductFormModalSection } from '../../sections/ProductFormModalSection';
import { ProductDeleteDialogSection } from '../../sections/ProductDeleteDialogSection';
import { useProductsQuery, useCategoriesQuery } from '../../services/useProductsQuery';
import { useCreateProductMutation, useDeleteProductMutation } from '../../services/useCreateProductMutation';
import { useProductCartStore } from '../../store/useProductCartStore';
import { useDebounce } from '@core/hooks/useDebounce';
import { Input } from '@core/components/Input';
import { Button } from '@core/components/Button';
import { Toast } from '@core/components/Toast';
import { Product, CreateProductDTO } from '../../types/product';
import { RootStackParamList } from '@core/navigation/types';
import { styles } from './ProductListContainer.styles';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const ProductListContainer: React.FC = () => {
  const { t } = useTranslation('product');
  const navigation = useNavigation<NavigationProp>();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchInput, setSearchInput] = useState<string>('');
  const debouncedSearch = useDebounce(searchInput, 400);

  const [isFormModalVisible, setIsFormModalVisible] = useState<boolean>(false);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const { data: productsData, isLoading, refetch } = useProductsQuery(selectedCategory, debouncedSearch);
  const { data: categoriesData = [] } = useCategoriesQuery();

  const createMutation = useCreateProductMutation();
  const deleteMutation = useDeleteProductMutation();

  const toggleFavorite = useProductCartStore((state) => state.toggleFavorite);
  const isFavorite = useProductCartStore((state) => state.isFavorite);

  const handleProductPress = useCallback(
    (product: Product) => {
      navigation.navigate('ProductDetail', { productId: product.id, title: product.title });
    },
    [navigation],
  );

  const handleCreateSubmit = (data: CreateProductDTO) => {
    createMutation.mutate(data, {
      onSuccess: () => {
        setToastMessage('Product created successfully!');
      },
    });
  };

  const handleDeleteConfirm = (product: Product) => {
    deleteMutation.mutate(product.id, {
      onSuccess: () => {
        setProductToDelete(null);
        setToastMessage('Product deleted successfully!');
      },
    });
  };

  return (
    <View style={styles.container} testID="product-list-container">
      {toastMessage && (
        <Toast message={toastMessage} type="success" onDismiss={() => setToastMessage(null)} />
      )}
      <View style={styles.headerContainer}>
        <View style={styles.searchRow}>
          <View style={styles.searchInputWrapper}>
            <Input
              placeholder={t('searchPlaceholder')}
              value={searchInput}
              onChangeText={setSearchInput}
              style={styles.searchInput}
            />
          </View>
          <Button label={t('addProduct')} onPress={() => setIsFormModalVisible(true)} style={styles.addButton} />
        </View>
        <ProductFilterBar
          categories={categoriesData}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          allCategoryLabel={t('allCategory')}
        />
      </View>

      <ProductGridSection
        products={productsData?.products || []}
        isLoading={isLoading}
        onRefresh={refetch}
        onProductPress={handleProductPress}
        onFavoriteToggle={toggleFavorite}
        onDeletePress={setProductToDelete}
        isFavorite={isFavorite}
      />

      <ProductFormModalSection
        visible={isFormModalVisible}
        onClose={() => setIsFormModalVisible(false)}
        onSubmit={handleCreateSubmit}
        isLoading={createMutation.isPending}
        title={t('addProduct')}
      />

      <ProductDeleteDialogSection
        product={productToDelete}
        visible={!!productToDelete}
        onCancel={() => setProductToDelete(null)}
        onConfirm={handleDeleteConfirm}
        isLoading={deleteMutation.isPending}
        title={t('deleteProduct')}
        message={t('confirmDelete')}
      />
    </View>
  );
};
