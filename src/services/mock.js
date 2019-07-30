import MockAdapter from 'axios-mock-adapter';

export default (api) => {
  const mock = new MockAdapter(api.axiosInstance);

  mock.onPost('/login').reply((config) => {
    const data = JSON.parse(config.data);

    if (data.email === 'lenonmauer@gmail.com' && data.password === 'slipknot') {
      return [
        200,
        {
          full_name: 'Lenon Mauer',
          token: 'Bearer abc',
        },
      ];
    }

    return [
      400,
      {
        error: 'Login ou senha inválidos.',
      },
    ];
  });
};
