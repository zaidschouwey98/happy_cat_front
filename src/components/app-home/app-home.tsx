import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: false,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <section>
          <parallax-component imageUrl="assets/img/carousel1.jpg" speed={0.5}>
            <h1>Swiss Happy Cat </h1>
            <p>Un élevage</p>
          </parallax-component>
        </section>
        <section class="content">
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-light p-3 rounded-2" tabindex="0">
          <h4 id="scrollspyHeading1">First heading</h4>

          <p>...</p>
          <h4 id="scrollspyHeading2">Second heading</h4>
          <p>...</p>
          <h4 id="scrollspyHeading3">Third heading</h4>
          <p>...</p>
          <h4 id="scrollspyHeading4">Fourth heading</h4>
          <p>...</p>
          <h4 id="scrollspyHeading5">Fifth heading</h4>
          <p>...</p>
        </div>
        </section>

        {/* <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link> */}
      </div>
    );
  }
}
