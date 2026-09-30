import React from 'react';
import {
  Pressable,
  Text,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors } from '@core/theme';
import { styles } from './Button.styles';

export interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  isLoading?: boolean;
  disabled?: boolean;
  testID?: string;
  style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = React.memo(
  ({
    label,
    onPress,
    variant = 'primary',
    isLoading = false,
    disabled = false,
    testID,
    style,
  }) => {
    const isInteractive = !disabled && !isLoading;

    const getButtonStyle = (): ViewStyle => {
      switch (variant) {
        case 'secondary':
          return styles.secondaryButton;
        case 'danger':
          return styles.dangerButton;
        case 'outline':
          return styles.outlineButton;
        default:
          return styles.primaryButton;
      }
    };

    const getTextStyle = (): TextStyle => {
      if (variant === 'outline') return styles.outlineText;
      return styles.solidText;
    };

    return (
      <Pressable
        testID={testID}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel={label}
        accessibilityState={{ disabled: !isInteractive }}
        onPress={isInteractive ? onPress : undefined}
        style={({ pressed }) => [
          styles.baseButton,
          getButtonStyle(),
          !isInteractive && styles.disabledButton,
          pressed && isInteractive && styles.pressed,
          style,
        ]}
      >
        {isLoading ? (
          <ActivityIndicator color={variant === 'outline' ? colors.primary : colors.white} />
        ) : (
          <Text style={[styles.baseText, getTextStyle()]}>{label}</Text>
        )}
      </Pressable>
    );
  },
);

Button.displayName = 'Button';
