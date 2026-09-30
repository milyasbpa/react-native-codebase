import React, { useCallback } from 'react';
import { FlatList, View, Text, RefreshControl } from 'react-native';
import { Product } from '../../types/product';
import { ProductCard } from '../../components/ProductCard';
import { LoadingSkeleton } from '@core/components/LoadingSkeleton';
import { styles } from './ProductGridSection.styles';

export interface ProductGridSectionProps {
  products: Product[];
  isLoading: boolean;
  onRefresh: () => void;
  onProductPress: (product: Product) => void;
  onFavoriteToggle?: (product: Product) => void;
  onDeletePress?: (product: Product) => void;
  isFavorite?: (productId: number) => boolean;
  emptyStateText?: string;
  testID?: string;
}

export const ProductGridSection: React.FC<ProductGridSectionProps> = React.memo(
  ({
    products,
    isLoading,
    onRefresh,
    onProductPress,
    onFavoriteToggle,
    onDeletePress,
    isFavorite,
    emptyStateText = 'No products found.',
    testID = 'product-grid-section',
  }) => {
    const renderProductItem = useCallback(
      ({ item }: { item: Product }) => (
        <ProductCard
          product={item}
          onPress={onProductPress}
          onFavoriteToggle={onFavoriteToggle}
          onDeletePress={onDeletePress}
          isFavorite={isFavorite ? isFavorite(item.id) : false}
        />
      ),
      [onProductPress, onFavoriteToggle, onDeletePress, isFavorite],
    );

    const keyExtractor = useCallback((item: Product) => item.id.toString(), []);

    if (isLoading && products.length === 0) {
      return (
        <View style={styles.skeletonContainer}>
          {[1, 2, 3, 4].map((key) => (
            <LoadingSkeleton key={key} height={100} style={styles.skeletonItem} />
          ))}
        </View>
      );
    }

    return (
      <FlatList
        testID={testID}
        data={products}
        keyExtractor={keyExtractor}
        renderItem={renderProductItem}
        initialNumToRender={8}
        maxToRenderPerBatch={8}
        windowSize={5}
        contentContainerStyle={styles.listContent}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>{emptyStateText}</Text>
          </View>
        }
      />
    );
  },
);

ProductGridSection.displayName = 'ProductGridSection';
