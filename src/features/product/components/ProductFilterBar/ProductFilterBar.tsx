import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { styles } from './ProductFilterBar.styles';

export interface ProductFilterBarProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  allCategoryLabel?: string;
  testID?: string;
}

export const ProductFilterBar: React.FC<ProductFilterBarProps> = React.memo(
  ({
    categories,
    selectedCategory,
    onSelectCategory,
    allCategoryLabel = 'All',
    testID = 'product-filter-bar',
  }) => {
    const allCategoriesList = [allCategoryLabel, ...categories];

    return (
      <View testID={testID} style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          {allCategoriesList.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <Pressable
                key={category}
                onPress={() => onSelectCategory(category)}
                style={[styles.chip, isSelected && styles.selectedChip]}
              >
                <Text style={[styles.chipText, isSelected && styles.selectedChipText]}>
                  {category}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    );
  },
);

ProductFilterBar.displayName = 'ProductFilterBar';
