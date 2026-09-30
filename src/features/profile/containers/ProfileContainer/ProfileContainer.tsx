import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button } from '@core/components/Button';
import { useAuthStore } from '@features/auth/store/useAuthStore';
import { styles } from './ProfileContainer.styles';

export const ProfileContainer: React.FC = () => {
  const { t, i18n } = useTranslation('profile');
  const user = useAuthStore((state) => state.user);
  const clearSession = useAuthStore((state) => state.clearSession);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <View style={styles.container} testID="profile-container">
      <Text style={styles.title}>{t('title')}</Text>
      {user && (
        <View style={styles.card}>
          <Text style={styles.name}>
            {user.firstName} {user.lastName}
          </Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
      )}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('languageLabel')}</Text>
        <View style={styles.langRow}>
          <Button
            label={t('english')}
            variant={i18n.language === 'en' ? 'primary' : 'outline'}
            onPress={() => handleLanguageChange('en')}
            style={styles.langButton}
          />
          <Button
            label={t('indonesian')}
            variant={i18n.language === 'id' ? 'primary' : 'outline'}
            onPress={() => handleLanguageChange('id')}
            style={styles.langButton}
          />
        </View>
      </View>

      <Button
        label={t('logoutButton')}
        onPress={clearSession}
        variant="danger"
        style={styles.logoutButton}
        testID="logout-button"
      />
    </View>
  );
};
