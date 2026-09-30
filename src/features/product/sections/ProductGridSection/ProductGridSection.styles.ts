import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography } from '@core/theme';

export const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    paddingBottom: spacing['2xl'],
  },
  skeletonContainer: {
    padding: spacing.lg,
  },
  skeletonItem: {
    marginBottom: spacing.md,
    borderRadius: borderRadius.lg,
  },
  emptyContainer: {
    padding: spacing['3xl'],
    alignItems: 'center',
  },
  emptyText: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },
});
