import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  DateField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  BooleanInput,
  EditButton
} from 'react-admin';

const userFilters = [
  <TextInput source="username" label="Логин" alwaysOn />,
  <TextInput source="email" label="Email" />
];

export const UserList = () => (
  <List filters={userFilters} sort={{ field: 'date_joined', order: 'DESC' }}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="username" />
      <EmailField source="email" />
      <DateField source="date_joined" />
      <EditButton />
    </Datagrid>
  </List>
);

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <BooleanInput source="is_staff" />
      <BooleanInput source="is_active" />
      <TextInput source="password" type="password" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <BooleanInput source="is_staff" />
      <BooleanInput source="is_active" />
      <TextInput source="password" type="password" />
    </SimpleForm>
  </Create>
);