import simpleRestProvider from 'ra-data-simple-rest';
import { fetchUtils } from 'react-admin';

const apiUrl = 'http://localhost:8000/api';

const httpClient = (url, options = {}) => {
  const token = localStorage.getItem('authToken');
  const headers = options.headers instanceof Headers
    ? options.headers
    : new Headers(options.headers || {});

  headers.set('Accept', 'application/json');
  if (token) {
    headers.set('Authorization', `Token ${token}`);
  }

  return fetchUtils.fetchJson(url, { ...options, headers });
};

const buildFormData = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    const value = data[key];
    if (value === undefined) {
      return;
    }
    if (value && value.rawFile instanceof File) {
      formData.append(key, value.rawFile);
    } else if (value !== null && typeof value === 'object') {
      formData.append(key, JSON.stringify(value));
    } else if (value !== null) {
      formData.append(key, value);
    }
  });
  return formData;
};

const shouldUseFormData = (data) => Object.values(data).some(
  (value) => value && value.rawFile instanceof File
);

const baseProvider = simpleRestProvider(apiUrl, httpClient);

const dataProvider = {
  ...baseProvider,
  create: (resource, params) => {
    if (shouldUseFormData(params.data)) {
      const formData = buildFormData(params.data);
      return httpClient(`${apiUrl}/${resource}/`, {
        method: 'POST',
        body: formData
      }).then(({ json }) => ({ data: json }));
    }
    return baseProvider.create(resource, params);
  },
  update: (resource, params) => {
    if (shouldUseFormData(params.data)) {
      const formData = buildFormData(params.data);
      return httpClient(`${apiUrl}/${resource}/${params.id}/`, {
        method: 'PUT',
        body: formData
      }).then(({ json }) => ({ data: json }));
    }
    return baseProvider.update(resource, params);
  }
};

export default dataProvider;
