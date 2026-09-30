import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography } from '@core/theme';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: spacing['4xl'],
    left: spacing.lg,
    right: spacing.lg,
    padding: spacing.md + 2,
    borderRadius: borderRadius.md,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: borderRadius.xs,
    zIndex: 9999,
  },
  text: {
    color: colors.white,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    textAlign: 'center',
  },
});
