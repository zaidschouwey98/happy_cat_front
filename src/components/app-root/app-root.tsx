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
        console.log(Env)
        url.searchParams.append('access_token', Env.fbApiToken);
        input = url.toString();
      }
      return originalFetch.call(window, input, init);
    }
  }
  render() {
    return (
      <div>
        <nav id="navbar-example2" class="navbar sticky-top  main-navbar px-3">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link mainnav-item" href="/#aboutus"><b>L'élevage</b></a>
            </li>
            <li class="nav-item">
              <a class="nav-link mainnav-item" href="/#socials">Réseaux</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mainnav-item" href="/#contact">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mainnav-item" href="/cats">Nos chats</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mainnav-item" href="/gallery">Galerie</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mainnav-item" href="/kittens">Chatons disponibles</a>
            </li>
          </ul>
        </nav>
        
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/gallery" component="app-gallery" exact={true} />
              <stencil-route url="/cats" component="app-cats" exact={true} />
              <stencil-route url="/kittens" component="app-kittens" exact={true} />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
