import React from 'react';
import { SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { LoginContainer } from '../../containers/LoginContainer';
import { styles } from './LoginScreen.styles';

export const LoginScreen: React.FC = React.memo(() => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <LoginContainer />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
});

LoginScreen.displayName = 'LoginScreen';
