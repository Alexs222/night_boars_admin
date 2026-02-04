import polyglotI18nProvider from 'ra-i18n-polyglot';
import russianMessages from 'ra-language-russian';

const messages = {
  ...russianMessages,
  resources: {
    ...russianMessages.resources,
    events: { name: 'Событие |||| События' },
    news: { name: 'Новость |||| Новости' },
    users: { name: 'Пользователь |||| Пользователи' }
  }
};

const i18nProvider = polyglotI18nProvider(() => messages, 'ru');

export default i18nProvider;
