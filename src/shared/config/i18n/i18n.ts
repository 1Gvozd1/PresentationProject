// конфигурация для переводов
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend'; // для того чтобы переводы грузились чанками
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next) // через .use подключаем плагины
    .init({
        fallbackLng: 'ru', // язык по умолчанию
        debug: __IS_DEV__, // для отображения в консоли только в dev режиме

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },

        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json', // путь до наших переводов
        },
    });

export default i18n;
