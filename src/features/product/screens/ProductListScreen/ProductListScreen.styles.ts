import { StyleSheet } from 'react-native';
import { colors, spacing } from '@core/theme';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerContainer: {
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingTop: spacing.sm,
  },
  searchRow: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
  },
  searchInputWrapper: {
    flex: 1,
    marginRight: spacing.sm,
  },
  searchInput: {
    height: 44,
  },
  addButton: {
    height: 44,
    paddingHorizontal: spacing.md,
  },
});
