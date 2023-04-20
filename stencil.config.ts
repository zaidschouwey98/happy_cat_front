import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/',
    },
  ],
  env:{
    fbBaseApiUrl: 'https://graph.facebook.com/v16.0/101195352253183',
    fbApiToken:'EAAHy4MD3sokBAAiZBIbZCM0riOTfZBA06BwS4by8mzpHCeRZAHMTqGorBFasDTIG7ontPxK8KHrL7QUoJsdfEcZAZCMU5b8zbmgicTS9qxsmfLuuNL1gsWD7UBPGceG4hnpLjqGTyWfJk7X9A8LZAdnpSFcn0ZCZCkYcVJxm5IlR9KCdVNvChbbpJ23H0yZAib28WaEga10anuvfdDQUBms7UsoSCZCkmbYOGwZD',
  }
};
