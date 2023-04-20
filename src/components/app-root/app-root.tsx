import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false,
})
export class AppRoot {
  render() {
    return (
      <div>
        <nav id="navbar-example2" class="navbar sticky-top bg-light px-3">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading1">L'élevage</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading2">Réseaux</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading3">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading3">Nos chats</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading3">Gallerie</a>
            </li>
          </ul>
        </nav>
        
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
