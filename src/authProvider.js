const authProvider = {
  login: ({ username, password }) => {
    const request = new Request('http://localhost:8000/api/auth/login/', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    });

    return fetch(request).then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }
      return response.json();
    }).then(({ token }) => {
      localStorage.setItem('authToken', token);
    });
  },
  logout: () => {
    const token = localStorage.getItem('authToken');
    localStorage.removeItem('authToken');
    if (!token) {
      return Promise.resolve();
    }
    return fetch('http://localhost:8000/api/auth/logout/', {
      method: 'POST',
      headers: {
        Authorization: `Token ${token}`
      }
    }).then(() => Promise.resolve());
  },
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('authToken');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () => (
    localStorage.getItem('authToken') ? Promise.resolve() : Promise.reject()
  ),
  getPermissions: () => Promise.resolve()
};

export default authProvider;
