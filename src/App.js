import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import authProvider from './authProvider';
import i18nProvider from './i18nProvider';
import { EventList, EventEdit, EventCreate } from './components/events';
import { NewsList, NewsEdit, NewsCreate } from './components/news';
import { UserList, UserEdit, UserCreate } from './components/users';

const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    i18nProvider={i18nProvider}
  >
    <Resource
      name="events"
      options={{ label: 'События' }}
      list={EventList}
      edit={EventEdit}
      create={EventCreate}
    />
    <Resource
      name="news"
      options={{ label: 'Новости' }}
      list={NewsList}
      edit={NewsEdit}
      create={NewsCreate}
    />
    <Resource
      name="users"
      options={{ label: 'Пользователи' }}
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
    />
  </Admin>
);

export default App;