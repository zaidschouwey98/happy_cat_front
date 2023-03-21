import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: false,
})
export class AppHome {
  render() {
    return (
      <div class="container-fluid">
        <div class="app-home">
          <section>
            <parallax-component imageUrl="assets/img/mainimg.jpg" speed={0.5}>
              <h1>Swiss Happy Cat</h1>
              <p>Un élevage</p>
            </parallax-component>
          </section>
          <section class="content">
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example p-3 rounded-2" tabindex="0">


              <div class="row mt-5 mb-5" >

                <div class="col-5">
                  <div class="text-center mb-4">
                  <h1 id="scrollspyHeading1 mb-5">A propos de nous</h1>
                  </div>
                  <div>
                    <p>Depuis 2018, dans notre petit élevage Swiss HappyCat près d’Yverdon nous avons quelques chatons chaque année.<br></br>Nous sommes avant tout une famille et nos chats en font partie.<br></br><br></br>
                      Notre plaisir est de le partager en plaçant nos bébés. Les Bengals sont extraordinaires ! J’enseigne les sciences dans la vie. Cette activité est avant tout faite par plaisir et passion.
                      <br></br><br></br>
                      Nous avons même eu dernièrement la visite de la télévision suisse romande. Une émission sur nos chats super affectueux est en projets de production.
                      <br></br><br></br>
                      Notre élevage est visible sur Faceebook et nous sommes inscrits au Catclub Romand qui pourra nous recommander.
                      <br></br><br></br>
                      Nous sommes allés chercher nos chats dans des élevages prestigieux mais avant tout familiaux, en Angleterre, France, Italie, Belgique et Australie. Plusieurs champions sont dans les pedigrees de chacun de nos chats mais surtout ils sont super apprivoisés et câlins.
                      <br></br><br></br>
                      Vous pouvez me contacter par WhatsApp de préférence (pour les photos et vidéos ça va mieux) ainsi que pour tous renseignements.</p>
                  </div>
                </div>
                <div class="col-7"><img src="assets/img/s.jpg" style={{ "width": "100%" }} alt="" /></div>
              </div>
              <div class="row text-center mt-5">
                <div class="col-12">
                  <h1 id="scrollspyHeading2">Nos réseaux</h1>
                </div>
                <div class="col-6 mt-5">
                  <div>
                    <img src="assets/img/tiktok_logo.webp" style={{ "width": "30%" }}></img>
                  </div>
                  <img src="assets/img/tiktok.png" style={{ "width": "30%" }}></img>
                </div>
                <div class="col-6 mt-5">
                  <div>
                    <img src="assets/img/instagram_logo.webp" style={{ "width": "30%" }}></img>
                  </div>
                  <img src="assets/img/insta.png" style={{ "width": "30%" }}></img>
                </div>
              </div>


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
      </div>
    );
  }
}
