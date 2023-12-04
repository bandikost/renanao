import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
        en: {
            translation: require('./locales/en/translation.json')
        },
        ru: {
            translation: require('./locales/ru/translation.json')
        },
        es: {
          translation: require('./locales/es/translation.json')
      }

    },
    interpolation: {
        escapeValue: false
    }
  });

export default i18next;