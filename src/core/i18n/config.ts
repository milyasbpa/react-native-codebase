import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import id from './locales/id.json';
import authEn from '@features/auth/i18n/en.json';
import authId from '@features/auth/i18n/id.json';
import productEn from '@features/product/i18n/en.json';
import productId from '@features/product/i18n/id.json';
import profileEn from '@features/profile/i18n/en.json';
import profileId from '@features/profile/i18n/id.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      core: en,
      auth: authEn,
      product: productEn,
      profile: profileEn,
    },
    id: {
      core: id,
      auth: authId,
      product: productId,
      profile: profileId,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
