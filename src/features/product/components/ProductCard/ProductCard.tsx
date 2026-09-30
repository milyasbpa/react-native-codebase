import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Product } from '../../types/product';
import { RatingBadge } from '../RatingBadge';
import { formatCurrency } from '@core/utils/formatters';
import { colors } from '@core/theme';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './ProductCard.styles';

export interface ProductCardProps {
  product: Product;
  onPress: (product: Product) => void;
  onFavoriteToggle?: (product: Product) => void;
  onDeletePress?: (product: Product) => void;
  isFavorite?: boolean;
  testID?: string;
}

export const ProductCard: React.FC<ProductCardProps> = React.memo(
  ({ product, onPress, onFavoriteToggle, onDeletePress, isFavorite = false, testID = 'product-card' }) => {
    return (
      <Pressable
        testID={testID}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel={product.title}
        onPress={() => onPress(product)}
        style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      >
        <Image source={{ uri: product.thumbnail }} style={styles.thumbnail} resizeMode="cover" />
        <View style={styles.content}>
          <View style={styles.headerRow}>
            <Text style={styles.category}>{product.category.toUpperCase()}</Text>
            <RatingBadge rating={product.rating} />
          </View>
          <Text style={styles.title} numberOfLines={2}>
            {product.title}
          </Text>
          <View style={styles.footerRow}>
            <Text style={styles.price}>{formatCurrency(product.price)}</Text>
            <View style={styles.actionButtons}>
              {onFavoriteToggle && (
                <Pressable
                  hitSlop={12}
                  onPress={() => onFavoriteToggle(product)}
                  style={styles.iconButton}
                  testID="favorite-button"
                >
                  <Ionicons
                    name={isFavorite ? 'heart' : 'heart-outline'}
                    size={20}
                    color={isFavorite ? colors.danger : colors.secondary}
                  />
                </Pressable>
              )}
              {onDeletePress && (
                <Pressable
                  hitSlop={12}
                  onPress={() => onDeletePress(product)}
                  style={styles.iconButton}
                  testID="delete-button"
                >
                  <Ionicons name="trash-outline" size={20} color={colors.danger} />
                </Pressable>
              )}
            </View>
          </View>
        </View>
      </Pressable>
    );
  },
);

ProductCard.displayName = 'ProductCard';
