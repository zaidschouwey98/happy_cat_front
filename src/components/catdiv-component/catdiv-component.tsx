import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'catdiv-component',
  styleUrl: 'catdiv-component.css',
  shadow: false,
})
export class CatdivComponent {
  @Prop() imgPaths: Array<string>;
  @Prop() orientation: 'left' | 'right';
  @Prop() catName: string;
  @Prop() catText: string;
  @Prop()  colorTheme: 'row-bg-dark' | 'row-bg-light';
  render() {
    return (
      <div class={`row ${this.colorTheme}`}>
        {this.orientation === 'left' && (
          <div class="col-sm-6">
            <img src={this.imgPaths[0]} class="right-img" alt="Cat 1" />
          </div>
        )}
        <div class="col-sm-6">
          <div class="row">
            <div class="col-12 mt-3 mb-3">
              <h2>{this.catName}</h2>
              <p class="text-justify">{this.catText}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <div class="image-container">
                <img src={this.imgPaths[1]} class="left-img" alt="Cat 1" />
              </div>
            </div>
            <div class="col-4">
              <div class="image-container">
                <img src={this.imgPaths[2]} class="left-img" alt="Cat 1" />
              </div>
            </div>
            <div class="col-4">
              <div class="image-container">
                <img src={this.imgPaths[3]} class="left-img" alt="Cat 1" />
              </div>
            </div>
          </div>
        </div>
        {this.orientation === 'right' && (
          <div class="col-sm-6">
            <img src={this.imgPaths[0]} class="right-img" alt="Cat 1" />
          </div>
        )}
      </div>
    );
  }
}
