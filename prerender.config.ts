import { PrerenderConfig } from '@stencil/core';
export const config: PrerenderConfig = {
    entryUrls: [
      '/',        // Home page
      '/cats',   // About page
      '/kittens', // Contact page
    ],
    hydrateOptions(url) {
      const hydrateOpts: any = {};
  
      switch (url.pathname) {
        case '/':
          hydrateOpts.title = 'Home Page - My App';
          hydrateOpts.meta = [
            { name: 'description', content: 'This is the home page of My App' },
            { name: 'keywords', content: 'home, my app, stenciljs' },
          ];
          break;
  
        case '/cats':
          hydrateOpts.title = 'About Us - My App';
          hydrateOpts.meta = [
            { name: 'description', content: 'Learn more about us at My App' },
            { name: 'keywords', content: 'about, my app, company' },
          ];
          break;
  
        case '/kittens':
          hydrateOpts.title = 'Contact Us - My App';
          hydrateOpts.meta = [
            { name: 'description', content: 'Get in touch with us at My App' },
            { name: 'keywords', content: 'contact, my app, support' },
          ];
          break;
      }
  
      return hydrateOpts;
    },
  };