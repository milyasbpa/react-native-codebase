import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography, layout } from '@core/theme';

export const styles = StyleSheet.create({
  baseButton: {
    height: layout.buttonHeight,
    minWidth: layout.minButtonWidth,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
  },
  dangerButton: {
    backgroundColor: colors.danger,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  disabledButton: {
    opacity: 0.5,
  },
  pressed: {
    opacity: 0.8,
  },
  baseText: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
  },
  solidText: {
    color: colors.white,
  },
  outlineText: {
    color: colors.primary,
  },
});
