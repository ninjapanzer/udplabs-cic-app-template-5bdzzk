const defaultAuthConfig = {
  cacheLocation: 'localstorage',
};

const config = {
  auth: {
    ...defaultAuthConfig,
    domain:
      'auth-rocks-black-scary-psychiatrist.cic-demo-platform.auth0app.com',
    clientId: 'pfr1F4rIHZA7gi7ixHMrH1swSAsTusLR',
    audience: ['api://authrocks/'],
  },
  app: {
    enableSilentAuth: false,
    port: 3000,
  },
  server: {
    permissions: ['authRocks'],
  },
};

export default config;
