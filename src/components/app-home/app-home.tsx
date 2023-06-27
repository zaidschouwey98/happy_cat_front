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
            <parallax-component imageUrl="assets/img/backgroundhome.jpg" speed={0.5}>
              <h1 class="outline-text">Swiss Happy Cat</h1>
              <p>Un élevage</p>
            </parallax-component>
          </section>
          <section class="content">
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -100%" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">


              <div class="row mt-5 mb-5 aboutus" >

                <div class="col-sm-5">
                  <div class="text-center mb-4">
                    <h1 id="scrollspyHeading1">A propos de nous</h1>
                  </div>
                  <div>
                    <p>Depuis 2018, dans notre petit &eacute;levage Swiss HappyCat pr&egrave;s d&rsquo;Yverdon, nous avons quelques chatons chaque ann&eacute;e.</p>

                    <p>Nous sommes avant tout une famille et nos chats en font partie.</p>

                    <p>Notre plaisir est de le partager en pla&ccedil;ant nos b&eacute;b&eacute;s.</p>

                    <p>Les Bengals sont extraordinaires !</p>

                    <p>Enseignante de sciences dans la vie, cette activit&eacute; est faite par plaisir et passion.</p>

                    <p>Nous avons eu derni&egrave;rement la visite de la t&eacute;l&eacute;vision suisse romande. Une &eacute;mission sur nos chats intitul&eacute;e -Mon animal et moi-sera diffus&eacute;e le 3 juin. Nous nous r&eacute;jouissons de pouvoir y montrer de beaux chats doux gentils et affectueux.</p>

                    <p>Notre &eacute;levage est visible sur Faceebook. Le profile porte le nom de la chatterie il est mentionn&eacute; dans l&rsquo;annonce ici-m&ecirc;me. Nous sommes inscrits au Catclub Romand qui pourra nous recommander. Un site internet au nom de l&rsquo;&eacute;levage est en cours de construction &eacute;galement.</p>

                    <p>Nous sommes all&eacute;s chercher nos chats dans des &eacute;levages prestigieux mais surtout familiaux, en Angleterre, France, Italie, Belgique et Australie.</p>

                    <p>Plusieurs champions sont dans les pedigrees de chacun de nos chats dont quelques champions du monde (9).</p>

                    <p>Bien entendu tous les tests g&eacute;n&eacute;tiques ont &eacute;t&eacute; faits. Nos chats sont en bonne sant&eacute; et bien &eacute;quilibr&eacute;s.</p>

                    <p>Au plaisir !</p>

                    <p>Swiss HappyCat Bengal Mouna</p>
                  </div>
                </div>
                <div class="col-sm-7"><img src="assets/img/img1.jpg" style={{ "width": "100%" }} alt="" /></div>
              </div>
              <div class="row text-center mt-5">
                <div class="col-12">
                  <h1 id="scrollspyHeading2">Nos réseaux</h1>
                </div>
                <div class="col-sm-4 mt-5">
                  <a href='https://www.tiktok.com/@swisshappycatbengal'>
                    <div>
                      <img src="assets/img/tiktok_logo.webp" style={{ "width": "30%" }}></img>
                    </div>
                    <img src="assets/img/tiktok.png" style={{ "width": "30%" }}></img>
                  </a>
                </div>

                <div class="col-sm-4 mt-5">
                  <a href='https://www.facebook.com/swissbengal1'>
                    <div>
                      <img src="assets/img/Facebook-Logo.png" style={{ "width": "30%" }}></img>
                    </div>
                    <img src="assets/img/facebookqr.JPG" style={{ "width": "30%" }}></img>
                  </a>
                </div>
                <div class="col-sm-4 mt-5">
                  <a href='https://instagram.com/swiss_happycat_bengal?igshid=MjEwN2IyYWYwYw=='>
                    <div>
                      <img src="assets/img/instagram_logo.webp" style={{ "width": "30%" }}></img>
                    </div>
                    <img src="assets/img/insta.png" style={{ "width": "30%" }}></img>
                  </a>
                </div>
              </div>
              <contact-component></contact-component>
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
