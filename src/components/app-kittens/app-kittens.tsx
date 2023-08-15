import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-kittens',
  styleUrl: 'app-kittens.css',
  shadow: true,
})
export class AppKittens {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
