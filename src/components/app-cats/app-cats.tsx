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
                <p>Tatoo poss&egrave;de un profile parfait mais &eacute;galement une robe somptueuse. Comme tous les chats de Britannia, elle a &eacute;t&eacute; &eacute;lev&eacute;e dans des conditions optimales. Elle est extr&ecirc;mement attachante, une m&egrave;re id&eacute;ale pour les prochaines g&eacute;n&eacute;rations.</p>

                <p>Britannia Bengal en Angleterre fait un travail de s&eacute;l&eacute;ction &eacute;poustouflant, coupl&eacute; a une socialisation du tonnerre. Merci Ansar, Nasima et famille pour votre passion et votre investissement et merci pour votre confiance.</p>              </div>
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
                <p>Raqqa vient de France. Alisson et son compagnon sont passionn&eacute;s par l&rsquo;&eacute;levage et lui ont offert une bonne socialisation. Elle est douce et gentille. Merci encore &agrave; Alisson pour sa confiance.</p>              </div>
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
        <catdiv-component orientation="right" colorTheme={"row-bg-dark"} catName="Britannia RoyalCrown Charlie" catText="Charlie est extrêmement sociable. Il aura plaisir à venir faire des concours et nous nous en
réjouissons car son profile est parfait et nous sommes très fier de lui." imgPaths={["assets/img/charlie/IMG_0859.jpg", "assets/img/charlie/IMG_9449.jpg", "assets/img/charlie/IMG_0443.jpg", "assets/img/charlie/DSC_6921.jpg"]} ></catdiv-component>
        <div class="row interline">
        </div>
        <catdiv-component orientation="left" colorTheme={"row-bg-light"} catName="Just Wild Sole" catText="Justwild Sole vient d’Italie. Malheureusement elle est très peureuse et peu socialisée. Nous lui
offrons une vie tranquille et la placerons à la campagne dès que possible. Son look sauvage nous a
séduit." imgPaths={["assets/img/sole/IMG_1925.jpg", "assets/img/sole/IMG_1243.jpg", "assets/img/sole/IMG_1947.jpg", "assets/img/sole/IMG_1956.jpg"]} ></catdiv-component>
        <div class="row interline">
        </div>
        <catdiv-component orientation="right" colorTheme={"row-bg-dark"} catName="Britannia Midnight Ninou Superglue" catText="Lors de son premier concours, Ninou a reçu directement un prix spécial du juge. Elle a également
d’immenses qualités tant dans son caractère que dans son physique. Ses bébés en hériteront." imgPaths={["assets/img/ninou/ninou1.jpeg", "assets/img/ninou/ninou2.jpeg", "assets/img/ninou/ninou3.jpeg", "assets/img/ninou/ninou4.jpeg"]} ></catdiv-component>
        <div class="row interline">
        </div>
        <catdiv-component orientation="left" colorTheme={"row-bg-light"} catName="Swiss HappyCat Hurluberlu" catText="Hurluberlu fait partie de la troisième génération de chat nés chez nous. Nous en sommes
particulièrement fiers. Son nez épais, ses grands yeux et sa robe aux dessins nets, contrastés et
répartis de façon homogène, lui donnent d’excellentes qualités de reproducteurs. Sa démarche toute
particulière de lionceau lui apporte un charme certain. Son caractère est égal aux autres chats de la
maison, il est proche de nous sage et sociable avec ses congénères. Nous espérons que les bébés
d’Hurluberlu héritent de toutes ses qualités tant physiques que sociables." imgPaths={["assets/img/lulu/lulu1.jpeg", "assets/img/lulu/lulu2.jpeg", "assets/img/lulu/lulu3.jpeg", "assets/img/lulu/lulu4.jpeg"]} ></catdiv-component>

      </div>
    );
  }
}
