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
            <div data-bs-spy="scroll" data-bs-target="#main-navbar" data-bs-root-margin="0px 0px -100%" data-bs-smooth-scroll="true" tabindex="0">
              <div class="row aboutus" >
                <div class="col-sm-5">
                  <div class="text-center ms-4 mb-4">
                    <h1 id="aboutus">A propos de nous</h1>
                  </div>
                  <div class="text-center">
                    <p>Notre &eacute;levage est situ&eacute; en Suisse &agrave; c&ocirc;t&eacute; d&rsquo;Orbe dans la campagne. Nos chats vivent avec nous et font partie int&eacute;grante de notre famille.</p>

                    <p>Notre objectif n&rsquo;est pas de vendre des chatons mais de s&eacute;lectionner nos chats pour faire &eacute;voluer la race Bengal vers des chats toujours plus beaux et sociables ainsi que de vous aider &agrave; trouver le chat qui vous convient.</p>

                    <p>L&rsquo;&eacute;mission TSR sur notre &eacute;levage refl&egrave;te bien qui nous sommes. Il est visible &agrave; cette adresse&#160;: Ou ci-dessous</p>
                    <iframe class="iframe" height="370" src="https://www.rts.ch/play/embed?urn=urn:rts:video:14064982&subdivisions=false&startTime=51" allow="geolocation *; autoplay; encrypted-media"></iframe>
                    <p>Nous faisons de longues recherches pour s&eacute;lectionner nos reproducteurs. Nous voulons non seulement des chat de haut standing mais &eacute;galement des chats provenant d&rsquo;&eacute;leveurs aimants et respectueux envers nos futurs petits compagnons. C&rsquo;est apr&egrave;s plusieurs ann&eacute;es d&rsquo;attente que nous avons finalement obtenu nos Bengals. Nos b&eacute;b&eacute;s ont des champions du monde dans leur p&eacute;digr&eacute;&eacute;.</p>

                    <p>Pour vous aider dans vos recherches, sur les r&eacute;seaux sociaux facebook nous avons cr&eacute;&eacute; un groupe qui r&eacute;unit tous les eleveurs suisses passionn&eacute;s. Vous y trouverez de toutes les couleurs et robes. Visiter l&rsquo;elevage avant une adoption est tr&egrave;s important. Un chaton &eacute;lev&eacute; dans une pi&egrave;ce, sans interaction avec d&rsquo;autres chats que sa m&egrave;re ou sa fraterie deviendra sauvage et le restera toute sa vie.</p>
                  </div>
                </div>
                <div class="col-sm-7 text-center"><img src="assets/img/img1.jpg" class="aboutus-img" alt="" /></div>
              </div>
              <div class="row text-center socials ">
                <div class="col-12">
                  <h1 id="socials">Nos réseaux</h1>
                </div>
                <div class="col-sm-4 tiktok">
                  <a href='https://www.tiktok.com/@swisshappycatbengal'>
                    <div>
                      <img src="assets/img/tiktok_logo.webp" class="social-img" ></img>
                    </div>
                    <img src="assets/img/tiktok.png"  class="social-img"></img>
                  </a>
                </div>

                <div class="col-sm-4 facebook">
                  <a href='https://www.facebook.com/swissbengal1'>
                    <div>
                      <img src="assets/img/Facebook-Logo.png"  class="social-img"></img>
                    </div>
                    <img src="assets/img/facebookqr.JPG"  class="social-img"></img>
                  </a>
                </div>
                <div class="col-sm-4 insta">
                  <a href='https://instagram.com/swiss_happycat_bengal?igshid=MjEwN2IyYWYwYw=='>
                    <div>
                      <img src="assets/img/instagram_logo.webp"  class="social-img"></img>
                    </div>
                    <img src="assets/img/insta.png"  class="social-img"></img>
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
