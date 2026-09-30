import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography } from '@core/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: spacing.lg,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: borderRadius.lg,
    backgroundColor: colors.surface,
    marginBottom: spacing.lg,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  category: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
  },
  title: {
    fontSize: typography.fontSize['2xl'] - 2,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  price: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    marginBottom: spacing.lg,
  },
  description: {
    fontSize: typography.fontSize.sm + 1,
    lineHeight: 22,
    color: colors.textSecondary,
    marginBottom: spacing['2xl'],
  },
  button: {
    marginTop: spacing.sm,
  },
  skeletonImage: {
    margin: spacing.lg,
    borderRadius: borderRadius.lg,
  },
  skeletonMargin: {
    marginHorizontal: spacing.lg,
    marginBottom: spacing.md,
  },
});
