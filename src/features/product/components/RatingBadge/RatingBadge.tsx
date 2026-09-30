import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@core/theme';
import { styles } from './RatingBadge.styles';

export interface RatingBadgeProps {
  rating: number;
}

export const RatingBadge: React.FC<RatingBadgeProps> = React.memo(({ rating }) => {
  return (
    <View style={styles.container} testID="rating-badge">
      <Ionicons name="star" size={14} color={colors.warning} />
      <Text style={styles.text}>{rating.toFixed(1)}</Text>
    </View>
  );
});

RatingBadge.displayName = 'RatingBadge';
