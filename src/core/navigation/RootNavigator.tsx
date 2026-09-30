import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { LoginScreen } from '@features/auth/screens/LoginScreen';
import { BottomTabNavigator } from './BottomTabNavigator';
import { ProductDetailScreen } from '@features/product/screens/ProductDetailScreen';
import { useAuthStore } from '@features/auth/store/useAuthStore';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isAuthenticated ? (
        <Stack.Screen name="Login" component={LoginScreen} />
      ) : (
        <>
          <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetailScreen}
            options={({ route }) => ({
              headerShown: true,
              title: route.params?.title || 'Product Detail',
            })}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
