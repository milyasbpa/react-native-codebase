import React from 'react';
import { SafeAreaView } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { ProductDetailContainer } from '../../containers/ProductDetailContainer';
import { RootStackParamList } from '@core/navigation/types';
import { styles } from './ProductDetailScreen.styles';

type ProductDetailRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

export const ProductDetailScreen: React.FC = React.memo(() => {
  const route = useRoute<ProductDetailRouteProp>();
  const productId = route.params?.productId || 1;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ProductDetailContainer productId={productId} />
    </SafeAreaView>
  );
});

ProductDetailScreen.displayName = 'ProductDetailScreen';
