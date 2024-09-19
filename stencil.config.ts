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
    fbApiToken:"EAAHy4MD3sokBO36Op4AqDLQu5OBFDgxr53JUrngmIccpl3F2I8u8JAn1LZCitBCLt98lRqVkkvRC74XZA8ONmy78rFQOXzB4GkhiF9rwbwD4IpeDKGCX2eQkQaPWkoQ6VJmZCFkFYJFq4oxOMyzSSVvGgPscTh7DjZCPSzR8ZBvrHZCQ9QGarNByJLuOqDmPGe7qGCoAZDZD",
  }
};
