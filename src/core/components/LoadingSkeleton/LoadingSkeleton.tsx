import React, { useEffect, useRef } from 'react';
import { View, Animated, ViewStyle } from 'react-native';
import { borderRadius as radiusTokens } from '@core/theme';
import { styles } from './LoadingSkeleton.styles';

export interface LoadingSkeletonProps {
  width?: number | `${number}%`;
  height?: number;
  borderRadius?: number;
  style?: ViewStyle;
  testID?: string;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = React.memo(
  ({
    width = '100%',
    height = 20,
    borderRadius = radiusTokens.xs,
    style,
    testID = 'loading-skeleton',
  }) => {
    const opacity = useRef(new Animated.Value(0.3)).current;

    useEffect(() => {
      const loop = Animated.loop(
        Animated.sequence([
          Animated.timing(opacity, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0.3,
            duration: 800,
            useNativeDriver: true,
          }),
        ]),
      );
      loop.start();
      return () => loop.stop();
    }, [opacity]);

    return (
      <View testID={testID} style={[styles.container, { width, height, borderRadius }, style]}>
        <Animated.View style={[styles.shimmer, { opacity }]} />
      </View>
    );
  },
);

LoadingSkeleton.displayName = 'LoadingSkeleton';
