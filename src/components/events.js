import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  DateTimeInput,
  EditButton,
  ImageField,
  ImageInput
} from 'react-admin';

const eventFilters = [
  <TextInput source="title" label="Название" alwaysOn />,
  <TextInput source="location" label="Место" />
];

export const EventList = () => (
  <List filters={eventFilters} sort={{ field: 'event_date', order: 'DESC' }}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" label="Название" />
      <TextField source="location" label="Место" />
      <DateField source="event_date" label="Дата" showTime />
      <ImageField source="poster_url" label="Постер" />
      <EditButton />
    </Datagrid>
  </List>
);

export const EventEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" label="Название" />
      <TextInput source="location" label="Место" />
      <TextInput source="short_description" label="Кратко" multiline />
      <TextInput source="description" label="Описание" multiline />
      <DateTimeInput source="event_date" label="Дата и время" />
      <ImageInput source="poster" label="Постер">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export const EventCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" label="Название" />
      <TextInput source="location" label="Место" />
      <TextInput source="short_description" label="Кратко" multiline />
      <TextInput source="description" label="Описание" multiline />
      <DateTimeInput source="event_date" label="Дата и время" />
      <ImageInput source="poster" label="Постер">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
