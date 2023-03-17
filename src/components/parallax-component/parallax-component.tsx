import { Component, State, Watch, h, Prop } from '@stencil/core';

@Component({
  tag: 'parallax-component',
  styleUrl: 'parallax-component.css',
  shadow: true,
})
export class ParallaxComponent {
  @Prop() imageUrl: string;
  @Prop() speed: number = 0.5;
  @State() translateY: number = 0;

  @Watch('speed')
  validateSpeed(newValue: number) {
    if (newValue < 0 || newValue > 1) {
      console.warn('Speed should be between 0 and 1.');
      this.speed = Math.min(Math.max(newValue, 0), 1);
    }
  }

  handleScroll = () => {
    this.translateY = 1 * this.speed * window.pageYOffset;
  }

  connectedCallback() {
    window.addEventListener('scroll', this.handleScroll);
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div class="parallax" style={{backgroundImage: `url(${this.imageUrl})`, transform: `translateY(${this.translateY}px)`}}>
        <slot />
      </div>
    );
  }

}
