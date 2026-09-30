import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { LoginForm, LoginFormValues } from '../../components/LoginForm';
import { useLoginMutation } from '../../services/useLoginMutation';
import { styles } from './LoginContainer.styles';

export const LoginContainer: React.FC = () => {
  const { t } = useTranslation('auth');
  const loginMutation = useLoginMutation();

  const handleLoginSubmit = (values: LoginFormValues) => {
    loginMutation.mutate(values);
  };

  return (
    <View style={styles.container} testID="login-container">
      <View style={styles.content}>
        <Text style={styles.title}>{t('title')}</Text>
        <Text style={styles.subtitle}>{t('subtitle')}</Text>
        <LoginForm onSubmit={handleLoginSubmit} isLoading={loginMutation.isPending} />
      </View>
    </View>
  );
};
