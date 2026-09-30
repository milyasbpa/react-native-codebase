import React from 'react';
import { SafeAreaView } from 'react-native';
import { ProductListContainer } from '../../containers/ProductListContainer';
import { OfflineBanner } from '@core/components/OfflineBanner';
import { styles } from './ProductListScreen.styles';

export const ProductListScreen: React.FC = React.memo(() => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <OfflineBanner />
      <ProductListContainer />
    </SafeAreaView>
  );
});

ProductListScreen.displayName = 'ProductListScreen';
