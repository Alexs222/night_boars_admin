import React from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { UserList, UserEdit, UserCreate } from './components/users';

const dataProvider = simpleRestProvider('http://localhost:8000/api');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource 
      name="users" 
      list={UserList} 
      edit={UserEdit} 
      create={UserCreate}
    />
  </Admin>
);

export default App;