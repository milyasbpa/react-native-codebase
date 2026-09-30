import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { RatingBadge } from '../../components/RatingBadge';
import { Button } from '@core/components/Button';
import { LoadingSkeleton } from '@core/components/LoadingSkeleton';
import { formatCurrency } from '@core/utils/formatters';
import { useProductDetailQuery } from '../../services/useProductsQuery';
import { useProductCartStore } from '../../store/useProductCartStore';
import { styles } from './ProductDetailContainer.styles';

export interface ProductDetailContainerProps {
  productId: number;
}

export const ProductDetailContainer: React.FC<ProductDetailContainerProps> = ({ productId }) => {
  const { t } = useTranslation('product');
  const { data: product, isLoading } = useProductDetailQuery(productId);
  const toggleFavorite = useProductCartStore((state) => state.toggleFavorite);
  const isFavorite = useProductCartStore((state) => state.isFavorite(productId));

  if (isLoading || !product) {
    return (
      <View style={styles.container} testID="product-detail-loading">
        <LoadingSkeleton height={250} style={styles.skeletonImage} />
        <LoadingSkeleton height={30} width="60%" style={styles.skeletonMargin} />
        <LoadingSkeleton height={20} width="40%" style={styles.skeletonMargin} />
        <LoadingSkeleton height={80} style={styles.skeletonMargin} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} testID="product-detail-container">
      <Image source={{ uri: product.thumbnail }} style={styles.image} resizeMode="contain" />
      <View style={styles.headerRow}>
        <Text style={styles.category}>{product.category.toUpperCase()}</Text>
        <RatingBadge rating={product.rating} />
      </View>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{formatCurrency(product.price)}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Button
        label={isFavorite ? 'Remove from Favorites' : t('addToCart')}
        onPress={() => toggleFavorite(product)}
        variant={isFavorite ? 'danger' : 'primary'}
        style={styles.button}
        testID="detail-favorite-button"
      />
    </ScrollView>
  );
};
