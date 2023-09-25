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
    fbApiToken:"EAAHy4MD3sokBO2plLPI2R0plzd6lcjHifZBZCPJPvI8bQIAnQyuqZCvo5RLzk3lBxbhoHRTMTmwI0byEUa8zZAjZBaYUypx6ZAPPn6MizkSwXMLZBnVapICxTLSldWlcopqVQd87KdWMU1xpHRYkhXd8bjsnezCkU0cxyfwhdFBZC7tmPk4IMAsZA7g4X7t8HmkzEih6XldITbY7E",
  }
};
