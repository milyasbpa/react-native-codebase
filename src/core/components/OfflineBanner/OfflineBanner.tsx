import React from 'react';
import { View, Text } from 'react-native';
import { useNetworkStatus } from '@core/hooks/useNetworkStatus';
import { styles } from './OfflineBanner.styles';

export const OfflineBanner: React.FC = React.memo(() => {
  const isConnected = useNetworkStatus();

  if (isConnected) return null;

  return (
    <View testID="offline-banner" style={styles.container}>
      <Text style={styles.text}>You are currently offline</Text>
    </View>
  );
});

OfflineBanner.displayName = 'OfflineBanner';
