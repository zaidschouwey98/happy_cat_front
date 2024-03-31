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
      copy: [
        { src: '_redirects', dest: '_redirects' }
      ]
    },
  ],
  env:{
    fbBaseApiUrl: 'https://graph.facebook.com/v16.0/101195352253183',
    fbApiToken:"EAAHy4MD3sokBO1r3cpipZCV8fvPXXZAJlSnbuZANngbpVdZA88jSZBwm29KAzJQI3r8er9Sj3tkZBkCUthZBRvlAhZCZBZCcNZBzSOZANGmPU9WDaTt96PGTyxoZB5YfKbBNDgITJM1bLc9qKeP746ZAN2HrTYqZB1orI3kFGVgtcyBZCd7DbuG5ZA3epcfIfXDp3MzxAlYbc4ZCSgsgZDZD",
  }
};
