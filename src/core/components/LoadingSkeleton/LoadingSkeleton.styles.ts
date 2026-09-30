import { StyleSheet } from 'react-native';
import { colors } from '@core/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.border,
    overflow: 'hidden',
  },
  shimmer: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.placeholder,
  },
});
