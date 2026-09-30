import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { colors } from '@core/theme';
import { styles } from './Input.styles';

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  testID?: string;
}

export const Input: React.FC<InputProps> = React.memo(
  ({ label, error, testID, style, ...rest }) => {
    return (
      <View style={styles.container}>
        {label && <Text style={styles.label}>{label}</Text>}
        <TextInput
          testID={testID}
          style={[styles.input, error && styles.inputError, style]}
          placeholderTextColor={colors.placeholder}
          accessibilityLabel={label}
          {...rest}
        />
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    );
  },
);

Input.displayName = 'Input';
