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
    fbApiToken:'EAAHy4MD3sokBAMypou8JZCGOtQq3PRzFGhpa5pb5wJsuIwiS1fFNIsNDailKKa25N2ZCpMVHKQJaLJQvkbe9BNmZCSV9VaLAX2TTs9NjD4BkqtTfNJdaLF0UkuUsvhhT5lUCiJ8nZBXlptnZCNfpQZCdyLiiux2X7ABQa894nWRSnLaeT3erCxPVQihAdlfMJzdBGjIXDqyFax7SM9wTFlLi9rlKZClwmYZD',
  }
};
