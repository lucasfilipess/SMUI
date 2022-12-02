import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enUS from './en-US/translation.json';
import ptBR from './pt-BR/translation.json';

const resources = {
  'en-US': {
    translation: enUS,
  },
  'pt-BR': {
    translation: ptBR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language,
  fallbackLng: 'en-US',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
