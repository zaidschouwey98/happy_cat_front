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
    fbApiToken:"EAAHy4MD3sokBO7sjcU9XZCplsOW2DXgDdp3qDJ01PzxPsUeKLn6oGlCjc5oaxMzY91huZAbJBtrD2x7yEQeDkgbXTM70s7S2NO3xmJr4iTCZCH9rVurhoNMcTQBaZA4A08X1quljD8In77GM0biLyoG0uG6yZB073V3AF6D0p3nadZAB5yyiGmZB7mxrmhDbXuZCE1xrRAZDZD",
  }
};
