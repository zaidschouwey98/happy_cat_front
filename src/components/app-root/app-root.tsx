import { Component, Env, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false,
})
export class AppRoot {
  componentWillLoad(){
    const originalFetch = window.fetch;
    window.fetch = async (input, init) => {
      if (typeof input === 'string' && input.startsWith('https://graph.facebook.com')) {
        const url = new URL(input);
        url.searchParams.append('access_token', Env.fbApiToken);
        input = url.toString();
      }
      return originalFetch.call(window, input, init);
    }
  }
  render() {
    return (
      <div>
        <nav id="navbar-example2" class="navbar sticky-top bg-light px-3">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link" href="/#scrollspyHeading1"><b>L'élevage</b></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#scrollspyHeading2">Réseaux</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#scrollspyHeading3">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/cats">Nos chats</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/gallerie">Galerie</a>
            </li>
          </ul>
        </nav>
        
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/gallerie" component="app-gallery" exact={true} />
              <stencil-route url="/cats" component="app-cats" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
