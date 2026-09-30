import React from 'react';
import { SafeAreaView } from 'react-native';
import { ProfileContainer } from '../../containers/ProfileContainer';
import { styles } from './ProfileScreen.styles';

export const ProfileScreen: React.FC = React.memo(() => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ProfileContainer />
    </SafeAreaView>
  );
});

ProfileScreen.displayName = 'ProfileScreen';
