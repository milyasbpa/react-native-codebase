import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { colors } from '@core/theme';
import { styles } from './Toast.styles';

export interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  onDismiss?: () => void;
  duration?: number;
  testID?: string;
}

export const Toast: React.FC<ToastProps> = React.memo(
  ({ message, type = 'info', onDismiss, duration = 3000, testID = 'toast-notification' }) => {
    useEffect(() => {
      if (onDismiss) {
        const timer = setTimeout(onDismiss, duration);
        return () => clearTimeout(timer);
      }
    }, [duration, onDismiss]);

    const getToastColor = () => {
      switch (type) {
        case 'success':
          return colors.success;
        case 'error':
          return colors.danger;
        default:
          return colors.info;
      }
    };

    return (
      <View testID={testID} style={[styles.container, { backgroundColor: getToastColor() }]}>
        <Text style={styles.text}>{message}</Text>
      </View>
    );
  },
);

Toast.displayName = 'Toast';
