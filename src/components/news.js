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
  DateInput,
  EditButton,
  ImageField,
  ImageInput
} from 'react-admin';

const newsFilters = [
  <TextInput source="title" label="Заголовок" alwaysOn />,
  <TextInput source="location" label="Место" />
];

export const NewsList = () => (
  <List filters={newsFilters} sort={{ field: 'news_date', order: 'DESC' }}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" label="Заголовок" />
      <TextField source="location" label="Место" />
      <DateField source="news_date" label="Дата" />
      <ImageField source="image_url" label="Изображение" />
      <EditButton />
    </Datagrid>
  </List>
);

export const NewsEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" label="Заголовок" />
      <TextInput source="location" label="Место" />
      <TextInput source="short" label="Кратко" multiline />
      <TextInput source="full" label="Полное описание" multiline />
      <DateInput source="news_date" label="Дата" />
      <ImageInput source="image" label="Изображение">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export const NewsCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" label="Заголовок" />
      <TextInput source="location" label="Место" />
      <TextInput source="short" label="Кратко" multiline />
      <TextInput source="full" label="Полное описание" multiline />
      <DateInput source="news_date" label="Дата" />
      <ImageInput source="image" label="Изображение">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
