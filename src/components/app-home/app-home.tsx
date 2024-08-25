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



          {/* <parallax-component imageUrl="assets/img/backgroundhome.jpg" speed={0.5}>
              <h2 class="outline-text">Swiss Happy Cat</h2>
              <p>Un élevage</p>
            </parallax-component> */}

          <section>
            <div class="row home-section">
              <div class="col-6 left-section d-flex align-items-center">
                <div class="d-flex flex-column align-items-center ">
                  <h2><strong>SwissHappyCat</strong></h2>
                  <div>-</div>
                  <h1><strong>Élevage de chatons Bengals sur Vaud</strong></h1>
                </div>
              </div>
              <div class="col-6 right-section">

              </div>
            </div>
            <div class="intersection">

            </div>
            <div data-bs-spy="scroll" data-bs-target="#main-navbar" data-bs-root-margin="0px 0px -100%" data-bs-smooth-scroll="true" tabindex="0">
              <div class="row aboutus" >
                <div class="col-sm-5">
                  <div class="text-center ms-4 mb-4">
                    <h2 id="aboutus">A propos de nous</h2>
                  </div>
                  <div >
                    <strong>Bienvenue dans notre Élevage de Chats Bengals à Proximité d’Orbe, Suisse</strong>

                    <p>Situé dans la campagne à côté d’Orbe, notre élevage de chats Bengals en Suisse est bien plus qu'un simple élevage – c’est une véritable passion. Nos chats vivent avec nous au quotidien, faisant partie intégrante de notre famille. Nous croyons fermement qu’un environnement familial est essentiel pour élever des chats équilibrés et sociables.</p>

                    <p>Notre objectif principal n’est pas de vendre des chatons, mais de contribuer à l’évolution de la race Bengal en sélectionnant soigneusement nos reproducteurs. Nous aspirons à élever des chats non seulement beaux, mais aussi dotés d’un tempérament exceptionnel. Notre engagement est de vous aider à trouver le compagnon idéal, parfaitement adapté à votre mode de vie et à vos attentes.</p>

                    <p>Notre approche a été reconnue et mise en lumière par l'émission de télévision TSR, qui a su capter l’essence de notre travail et notre dévouement. Vous pouvez visionner l’émission ci-dessous pour découvrir qui nous sommes vraiment.</p>
                    <iframe class="iframe" height="370" src="https://www.rts.ch/play/embed?urn=urn:rts:video:14064982&subdivisions=false&startTime=51" allow="geolocation *; autoplay; encrypted-media"></iframe>

                    <p>La sélection de nos reproducteurs est le fruit de longues recherches et de collaborations avec des éleveurs qui partagent nos valeurs d’amour et de respect envers ces merveilleux félins. Après plusieurs années d'attente, nous avons finalement accueilli nos Bengals, issus de lignées prestigieuses avec des champions du monde dans leur pedigree.</p>

                    <p>Nous avons également créé un groupe sur Facebook dédié aux éleveurs suisses passionnés de Bengals. Ce groupe rassemble une communauté engagée où vous pouvez découvrir une grande variété de couleurs et de robes. Nous encourageons vivement les visites de notre élevage avant toute adoption, car il est essentiel de choisir un chaton élevé dans un environnement riche en interactions. Un chaton isolé, ne côtoyant que sa mère ou sa fratrie, risque de développer un comportement sauvage difficile à corriger par la suite.</p>

                    <p>Rejoignez notre communauté et découvrez des chats Bengals élevés avec passion, respect, et un souci constant de leur bien-être.</p>


                  </div>
                </div>
                <div class="col-sm-7 text-center"><img src="assets/img/img1.jpg" class="aboutus-img" alt="" /></div>
              </div>
              <div class="row text-center socials ">
                <div class="col-12 mb-4">
                  <h2 id="socials">Nos réseaux</h2>
                </div>
                <div class="col-sm-4 tiktok">
                  <a href='https://www.tiktok.com/@swisshappycatbengal'>
                    <div>
                      <img src="assets/img/tiktok_logo.webp" class="social-img" ></img>
                    </div>
                    <img src="assets/img/tiktok.png" class="social-img"></img>
                  </a>
                </div>

                <div class="col-sm-4 facebook">
                  <a href='https://www.facebook.com/swissbengal1'>
                    <div>
                      <img src="assets/img/Facebook-Logo.png" class="social-img"></img>
                    </div>
                    <img src="assets/img/facebookqr.JPG" class="social-img"></img>
                  </a>
                </div>
                <div class="col-sm-4 insta">
                  <a href='https://instagram.com/swiss_happycat_bengal?igshid=MjEwN2IyYWYwYw=='>
                    <div>
                      <img src="assets/img/instagram_logo.webp" class="social-img"></img>
                    </div>
                    <img src="assets/img/insta.png" class="social-img"></img>
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
