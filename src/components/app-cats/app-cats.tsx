import { Component, Env, State, h } from '@stencil/core';

@Component({
  tag: 'app-cats',
  styleUrl: 'app-cats.css',
  shadow: false,
})
export class AppCats {
  @State() albums: [{ name: string; id: number; photos: { data: [] } }];
  async componentWillLoad() {
    if (localStorage.getItem('albums')) {
      this.albums = JSON.parse(localStorage.getItem('albums'));
    } else {
      const albums = await fetch(`${Env.fbBaseApiUrl}/?fields=albums.fields(photos.fields(source,name),name)`);
      if (!albums.ok) {
        //@ts-ignore
        this.albums = [];
        return;
      }
      this.albums = (await albums.json()).albums.data;
      localStorage.setItem('albums', JSON.stringify(this.albums));
    }
  }
  render() {
    return (
      <div class="container-fluid">
        <div class="row row-bg-dark">
          <div class="col-sm-6">
            <div class="row">
              <div class="col-12 mt-3 mb-3">
                <h4>Britannia Tomorrow Tatoo</h4>
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <div class="image-container">
                  <img src="assets/img/tatoo/IMG_0583.JPG" class="left-img" alt="Cat 1" />
                </div>
              </div>
              <div class="col-4">
                <div class="image-container">
                  <img src="assets/img/tatoo/IMG_0584.JPG" class="left-img" alt="Cat 1" />
                </div>
              </div>
              <div class="col-4">
                <div class="image-container">
                  <img src="assets/img/tatoo/IMG_0585.JPG" class="left-img" alt="Cat 1" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <img src="assets/img/tatoo/tatoo.jpg" class="right-img" alt="Cat 1" />
          </div>
        </div>
        <div class="row interline">
        </div>
        <div class="row row-bg-light">
          <div class="col-sm-6">
            <img src="assets/img/raqqa/DSC_7089.jpg" class="right-img" alt="Cat 1" />
          </div>
          <div class="col-sm-6">
            <div class="row">
              <div class="col-12 mt-3 mb-3">
                <h4>Animox Free Raqqa La douce</h4>
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <div class="image-container">
                  <img src="assets/img/raqqa/DSC_6935.JPG" class="left-img" alt="Cat 1" />
                </div>
              </div>
              <div class="col-4">
                <div class="image-container">
                  <img src="assets/img/raqqa/IMG_5952.JPG" class="left-img" alt="Cat 1" />
                </div>
              </div>
              <div class="col-4">
                <div class="image-container">
                  <img src="assets/img/raqqa/lightX.jpeg" class="left-img" alt="Cat 1" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row interline">
        </div>
        <catdiv-component orientation="right" colorTheme={"row-bg-dark"} catName="Charlie" catText="Texxte" imgPaths={["assets/img/charlie/IMG_0859.jpg","assets/img/charlie/IMG_9449.jpg","assets/img/charlie/IMG_0443.jpg","assets/img/charlie/DSC_6921.jpg"]} ></catdiv-component>
        <div class="row interline">
        </div>
        <catdiv-component orientation="left" colorTheme={"row-bg-light"} catName="Just Wild Sole" catText="Texxte" imgPaths={["assets/img/sole/IMG_1925.jpg","assets/img/sole/IMG_1243.jpg","assets/img/sole/IMG_1947.jpg","assets/img/sole/IMG_1956.jpg"]} ></catdiv-component>

      </div>
    );
  }
}
