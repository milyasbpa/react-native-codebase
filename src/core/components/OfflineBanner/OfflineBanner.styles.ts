import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '@core/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    paddingVertical: spacing.xs + 2,
    paddingHorizontal: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.semibold,
  },
});
