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
        { src: 'assets/robots.txt', dest:'robots.txt'},
        { src: 'assets/sitemap.xml', dest:'sitemap.xml'},
        { src: '_redirects', dest: '_redirects' }
      ]
    },
  ],
  env:{
    fbBaseApiUrl: 'https://graph.facebook.com/v16.0/101195352253183',
    fbApiToken:"EAAHy4MD3sokBO9CHWsxC3axMvpUvFznsdkfihCprcuqeSFdZBDZBUSxgZBmHeR9VZB006wJMXIiB4I8H69iAnIoZBvuTyqZBi8NskkqkaikRnZC1su0TRZBgVUxfPuUM9npOx1SLaiTrIsJ7OPvx4KOJXNzwZA8J1TBXoc0pvb03VlpfshuwJcylv6LUEyOZAD3SBLBIORVwZDZD",
  }
};
