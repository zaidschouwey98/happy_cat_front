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
              <div class="col-6 left-section d-flex align-items-center text-center">
                <div class="d-flex flex-column align-items-center text-center">
                  <svg class ="title" width="400" height="100" viewBox="0 0 369.54838709677415 64.05181554749637"><defs id="SvgjsDefs2359"></defs><g id="SvgjsG2360" transform="matrix(0.7116787552293772,0,0,0.7116787552293772,-6.682687510780625,-3.558393776146886)" fill="#ffffff"><g xmlns="http://www.w3.org/2000/svg"><path d="M80.43,24.25c-3.93-3.04-7.65-5.91-9.37-6.66c-3.95-1.71-10.3-3.43-11.41-3.65l-0.94-0.18c-3.1-0.62-12.52-2.48-13.89-2.82   c-1.65-0.42-7.92-0.79-8.68-0.84c-0.41-0.02-2.46-0.6-4.45-1.17c-2.99-0.85-7.1-2.01-10.82-2.82C17.73,5.42,14.45,5,12.31,5   c-1.51,0-2.2,0.2-2.56,0.73c-1.44,2.15,1.86,5.64,2.54,6.31c0.9,0.9,3.15,2.84,4.96,4.39c0.68,0.58,1.28,1.1,1.72,1.49   c1.12,0.97,3.55,4.78,4.72,6.69c-0.75,1.37-2.77,5-3.35,6.16c-0.04,0.08-4.16,8.51-4.52,11.17c-0.21,1.57,0.18,4.64,1.19,9.38   l0.03,0.12c0.42,1.98,0.89,5.04,0.82,5.53c-0.15,0.47-1.85,3.86-3.41,6.9c-0.31,0.44-1.7,2.61-0.88,4.72   c0.9,2.31,2.26,3.34,3.24,3.8c0.51,0.24,1.87,1.11,3.18,1.96c2.17,1.4,4.41,2.84,5.52,3.24c0.28,0.1,0.59,0.17,0.9,0.23l3.71,15.38   c0.04,0.15,0.18,0.24,0.33,0.22c0.15-0.03,0.26-0.18,0.23-0.33l-2.49-15.13c0.94-0.02,1.96-0.16,3.01-0.4l8.56,17.23   c0.08,0.18,0.3,0.26,0.48,0.18c0.19-0.08,0.28-0.31,0.2-0.5l-7.56-17.4c0.97-0.32,1.92-0.73,2.84-1.22l10.83,12.04   c0.18,0.19,0.48,0.22,0.68,0.05c0.22-0.17,0.25-0.49,0.08-0.7L37.28,74.91c1.25-0.85,2.35-1.85,3.17-2.99   c0.87,0.11,2.54,0.26,4.55,0.26c4.47,0,10.39-0.79,13.25-4.55c3.201-4.217,4.095-9.365,4.342-12.194   c0.048-0.549-0.34-1.038-0.887-1.108h0c-0.575-0.074-1.094,0.339-1.145,0.916c-0.226,2.584-1.04,7.351-3.931,11.156   c-2.35,3.1-7.62,3.75-11.63,3.75c-2.75,0-4.88-0.32-4.9-0.32c-0.4-0.07-0.81,0.12-1.02,0.47c-0.7,1.16-1.8,2.18-3.08,3.03   l-1.71-2.1c-0.01-0.02-0.02-0.03-0.03-0.04c-0.38-0.42-1.02-0.46-1.44-0.08s-0.45,1.02-0.08,1.44l1.57,1.74   c-0.73,0.36-1.48,0.67-2.24,0.91l-1.62-3.74c-0.01-0.02-0.02-0.03-0.03-0.05c-0.25-0.5-0.86-0.71-1.36-0.46s-0.71,0.86-0.46,1.37   l1.67,3.36c-0.81,0.16-1.59,0.25-2.32,0.25h-0.1l-0.42-2.59c-0.01-0.02-0.01-0.05-0.02-0.07c-0.13-0.55-0.68-0.88-1.23-0.75   c-0.54,0.13-0.88,0.68-0.75,1.23l0.43,1.78c-1.06-0.5-3.09-1.81-4.76-2.89c-0.35-0.22-0.68-0.44-1-0.64l2.64-4.16   c0.1-0.17,0.08-0.39-0.07-0.54c-0.17-0.17-0.45-0.17-0.62,0l-3.6,3.67c-0.31-0.18-0.58-0.33-0.78-0.42   c-0.94-0.44-1.68-1.35-2.2-2.7c-0.41-1.04,0.34-2.41,0.67-2.84c0.03-0.05,0.06-0.1,0.09-0.15c1.01-1.96,3.38-6.6,3.59-7.32   c0.34-1.19-0.78-6.47-0.79-6.52L19,50.89c-1.18-5.53-1.28-7.77-1.16-8.67c0.25-1.83,3.19-8.28,4.32-10.54   c0.69-1.37,3.57-6.54,3.6-6.59c0.18-0.32,0.17-0.71-0.02-1.02c-0.37-0.63-3.75-6.21-5.43-7.68c-0.44-0.39-1.05-0.92-1.73-1.5   c-1.78-1.53-4-3.44-4.85-4.29c-1.39-1.38-2.24-2.9-2.31-3.52c0.18-0.02,0.46-0.04,0.89-0.04c1.57,0,4.54,0.27,8.12,1.06   c3.67,0.79,7.74,1.95,10.71,2.79c3.31,0.94,4.43,1.25,4.93,1.25c0.93,0.06,2.69,0.17,4.36,0.31c1.68,0.14,3.27,0.31,3.9,0.46   c1.42,0.36,10.88,2.23,13.99,2.84l0.93,0.19c1.03,0.2,7.25,1.89,11,3.52c1.49,0.65,5.27,3.57,8.93,6.4   c3.759,2.906,6.276,4.821,7.98,5.901c0.409,0.259,0.939,0.186,1.272-0.165v0c0.435-0.459,0.353-1.2-0.178-1.543   C86.304,28.794,83.012,26.248,80.43,24.25z"></path><path d="M58.92,30.07c-1.05-0.95-2.67-1.42-4.82-1.42c-5.37,0-12.62,2.92-12.92,3.04c-0.45,0.18-0.71,0.65-0.62,1.12   c0.08,0.47,0.48,0.82,0.96,0.84c4.29,0.15,11.77,1.03,13.62,2.74c2.07,1.93,3.08,7.88,3.3,10.02c0.05,0.49,0.45,0.88,0.95,0.91   h0.06c0.48,0,0.89-0.33,1-0.8C60.73,45.23,63.07,33.77,58.92,30.07z M59.25,40.06c-0.6-2-1.48-4-2.73-5.16   c-1.78-1.66-6.31-2.49-9.93-2.9c2.34-0.68,5.16-1.32,7.51-1.32c1.63,0,2.8,0.3,3.47,0.9C59.19,33.03,59.45,36.66,59.25,40.06z"></path><path d="M28.58,58.687c-0.615,0.207-0.829,0.969-0.413,1.467c0.466,0.558,0.997,1.254,1.386,1.776   c0.316,0.423,0.915,0.496,1.325,0.164c1.251-1.014,3.502-3.044,2.578-3.865C32.628,57.493,30.162,58.153,28.58,58.687z"></path></g></g><g id="SvgjsG2361" transform="matrix(2.1926225685470477,0,0,2.1926225685470477,75.95619280935932,5.703280811211997)" fill="#ffffff"><path d="M2.08 11.02 l1.78 1.66 c0.56 0.52 1 1.0767 1.32 1.67 s0.48 1.19 0.48 1.79 l0 0.26 c0.01334 0.42666 -0.04 0.80666 -0.16 1.14 l0.74 0 c0.10666 -0.36 0.15332 -0.73334 0.13998 -1.12 l0 -0.28 c0 -0.72 -0.18334 -1.4067 -0.55 -2.06 s-0.87666 -1.2933 -1.53 -1.92 l-1.72 -1.62 c-0.54666 -0.52 -0.99666 -1.0067 -1.35 -1.46 s-0.53 -1.02 -0.53 -1.7 l0 -0.12 c0 -0.70666 0.19666 -1.2767 0.59 -1.71 s0.94334 -0.65 1.65 -0.65 c0.50666 0 0.92 0.07666 1.24 0.23 s0.64666 0.38334 0.98 0.69 l0.46 -0.52 c-0.37334 -0.34666 -0.75668 -0.60666 -1.15 -0.78 s-0.90334 -0.26 -1.53 -0.26 c-0.81334 0 -1.5033 0.26334 -2.07 0.79 s-0.85 1.2567 -0.85 2.19 l0 0.16 c0 0.76 0.19 1.41 0.57 1.95 s0.87666 1.0967 1.49 1.67 z M5.96 18.3 l-0.82002 0 c-0.46666 0.68 -1.2133 1.0267 -2.24 1.04 c-0.34666 0 -0.66 -0.04 -0.94 -0.12 l0 0.7 c0.28 0.05334 0.59334 0.08 0.94 0.08 c0.72 0 1.34 -0.14666 1.86 -0.44 s0.92 -0.71334 1.2 -1.26 z M18.94 4.24 l-2.04 12.62 l-2.44 -12.62 l-0.36 0 l-1.74 10.02 c0 0.02666 0.0033398 0.12 0.01 0.28 s0.02 0.34 0.04 0.54 s0.04 0.39 0.06 0.57 s0.03666 0.29 0.05 0.33 c0.36 -1.92 0.65 -3.46 0.87 -4.62 s0.42334 -2.2334 0.61 -3.22 s0.28 -1.5 0.28 -1.54 c0 0.05334 0.13334 0.78334 0.4 2.19 s0.56 2.94 0.88 4.6 s0.74666 3.8634 1.28 6.61 l0.12 0 l2.62 -15.76 l-0.64 0 z M9.58 4.24 l-0.6 0 l2.62 15.76 l0.1 0 l0.3 -1.1 z M22.18 4.24 l0 15.76 l0.52 0 l0 -15.76 l-0.52 0 z M27.380000000000003 11.02 l1.78 1.66 c0.56 0.52 1 1.0767 1.32 1.67 s0.48 1.19 0.48 1.79 l0 0.26 c0.01334 0.42666 -0.04 0.80666 -0.16 1.14 l0.74 0 c0.10666 -0.36 0.15332 -0.73334 0.13998 -1.12 l0 -0.28 c0 -0.72 -0.18334 -1.4067 -0.55 -2.06 s-0.87666 -1.2933 -1.53 -1.92 l-1.72 -1.62 c-0.54666 -0.52 -0.99666 -1.0067 -1.35 -1.46 s-0.53 -1.02 -0.53 -1.7 l0 -0.12 c0 -0.70666 0.19666 -1.2767 0.59 -1.71 s0.94334 -0.65 1.65 -0.65 c0.50666 0 0.92 0.07666 1.24 0.23 s0.64666 0.38334 0.98 0.69 l0.46 -0.52 c-0.37334 -0.34666 -0.75668 -0.60666 -1.15 -0.78 s-0.90334 -0.26 -1.53 -0.26 c-0.81334 0 -1.5033 0.26334 -2.07 0.79 s-0.85 1.2567 -0.85 2.19 l0 0.16 c0 0.76 0.19 1.41 0.57 1.95 s0.87666 1.0967 1.49 1.67 z M31.26 18.3 l-0.82002 0 c-0.46666 0.68 -1.2133 1.0267 -2.24 1.04 c-0.34666 0 -0.66 -0.04 -0.94 -0.12 l0 0.7 c0.28 0.05334 0.59334 0.08 0.94 0.08 c0.72 0 1.34 -0.14666 1.86 -0.44 s0.92 -0.71334 1.2 -1.26 z M36.36 11.02 l1.78 1.66 c0.56 0.52 1 1.0767 1.32 1.67 s0.48 1.19 0.48 1.79 l0 0.26 c0.01334 0.42666 -0.04 0.80666 -0.16 1.14 l0.74 0 c0.10666 -0.36 0.15332 -0.73334 0.13998 -1.12 l0 -0.28 c0 -0.72 -0.18334 -1.4067 -0.55 -2.06 s-0.87666 -1.2933 -1.53 -1.92 l-1.72 -1.62 c-0.54666 -0.52 -0.99666 -1.0067 -1.35 -1.46 s-0.53 -1.02 -0.53 -1.7 l0 -0.12 c0 -0.70666 0.19666 -1.2767 0.59 -1.71 s0.94334 -0.65 1.65 -0.65 c0.50666 0 0.92 0.07666 1.24 0.23 s0.64666 0.38334 0.98 0.69 l0.46 -0.52 c-0.37334 -0.34666 -0.75668 -0.60666 -1.15 -0.78 s-0.90334 -0.26 -1.53 -0.26 c-0.81334 0 -1.5033 0.26334 -2.07 0.79 s-0.85 1.2567 -0.85 2.19 l0 0.16 c0 0.76 0.19 1.41 0.57 1.95 s0.87666 1.0967 1.49 1.67 z M40.24 18.3 l-0.82002 0 c-0.46666 0.68 -1.2133 1.0267 -2.24 1.04 c-0.34666 0 -0.66 -0.04 -0.94 -0.12 l0 0.7 c0.28 0.05334 0.59334 0.08 0.94 0.08 c0.72 0 1.34 -0.14666 1.86 -0.44 s0.92 -0.71334 1.2 -1.26 z M43.940000000000005 13.96 l0 -9.72 l-0.68 0 l0 15.76 l0.68 0 l0 -5.4 l0 -0.64 z M44.220000000000006 14.6 l5.84 0 l0 5.4 l0.68 0 l0 -11.62 l-0.68 0 l0 5.58 l-5.84 0 l0 0.64 z M58.68000000000001 6.140000000000001 c0 0.08 0.23666 0.84334 0.71 2.29 s0.99 3.03 1.55 4.75 s1.3133 3.9934 2.26 6.82 l0.86 0 l-5.3 -15.76 l-0.16 0 l-5.26 15.76 l0.82 0 z M58.32000000000001 15.52 l-0.72 0 l1.2 4.48 l0.72 0 z M68.03999999999999 4.24 l-1.38 0 l0 0.64 l0.9 0 l0.44 0 c1.64 0 2.8734 0.47334 3.7 1.42 s1.24 2.18 1.24 3.7 l0 0.22 c0 1.4933 -0.41334 2.7134 -1.24 3.66 s-2.06 1.42 -3.7 1.42 l-0.64 0 l0 0 l-0.44 0 l-0.22 0 l-0.04 0 l0 4.7 l0.7 0 l0 -4.04 l0.68 0 c1.84 0 3.2366 -0.54334 4.19 -1.63 s1.43 -2.45 1.43 -4.09 l0 -0.26 c0 -1.64 -0.48334 -3.0066 -1.45 -4.1 s-2.3566 -1.64 -4.17 -1.64 z M77.63999999999999 4.24 l-1.38 0 l0 0.64 l0.9 0 l0.44 0 c1.64 0 2.8734 0.47334 3.7 1.42 s1.24 2.18 1.24 3.7 l0 0.22 c0 1.4933 -0.41334 2.7134 -1.24 3.66 s-2.06 1.42 -3.7 1.42 l-0.64 0 l0 0 l-0.44 0 l-0.22 0 l-0.04 0 l0 4.7 l0.7 0 l0 -4.04 l0.68 0 c1.84 0 3.2366 -0.54334 4.19 -1.63 s1.43 -2.45 1.43 -4.09 l0 -0.26 c0 -1.64 -0.48334 -3.0066 -1.45 -4.1 s-2.3566 -1.64 -4.17 -1.64 z M94.11999999999999 4.24 l-0.86 0 l-3.78 10.2 l0 5.56 l0.84 0 l0 -5.56 z M87.27999999999999 5.699999999999999 l-0.54 -1.46 l-0.88 0 l0.56 1.46 l0.86 0 z M103.65999999999998 19.96 l0.039942 -0.63998 c-1.96 -0.13334 -3.52 -0.94668 -4.68 -2.44 c-1.1067 -1.3867 -1.66 -3.06 -1.66 -5.02 c0 -1.0267 0.16666 -1.9167 0.5 -2.67 s0.83334 -1.4833 1.5 -2.19 c1.3333 -1.4 3 -2.1 5 -2.1 c1.2133 0 2.3066 0.26 3.28 0.78 s1.7667 1.2467 2.38 2.18 l0.48 -0.38 c-0.66666 -1.0133 -1.5333 -1.8067 -2.6 -2.38 c-1.0133 -0.54666 -2.16 -0.81332 -3.44 -0.79998 c-1.08 0 -2.0934 0.18334 -3.04 0.55 s-1.78 0.93 -2.5 1.69 c-0.72 0.77334 -1.2633 1.5733 -1.63 2.4 s-0.55 1.8 -0.55 2.92 c0.01334 2.12 0.62 3.9334 1.82 5.44 c1.28 1.6133 2.98 2.5 5.1 2.66 z M104.87999999999998 19.98002 c1.0933 -0.06666 2.0934 -0.32664 3 -0.77998 c1.04 -0.53334 1.9133 -1.2867 2.62 -2.26 l-0.46 -0.4 c-0.64 0.88 -1.4467 1.5733 -2.42 2.08 c-0.84 0.42666 -1.76 0.66666 -2.76 0.72 z M118.43999999999998 6.140000000000001 c0 0.08 0.23666 0.84334 0.71 2.29 s0.99 3.03 1.55 4.75 s1.3133 3.9934 2.26 6.82 l0.86 0 l-5.3 -15.76 l-0.16 0 l-5.26 15.76 l0.82 0 z M118.07999999999998 15.52 l-0.72 0 l1.2 4.48 l0.72 0 z M132.28 4.5 l-0.000019531 -0.26 l-5.86 0 l0 0.64 l3.38 0 l0 15.12 l0.7 0 l0 -15.12 l1.8 0 c-0.02666 -0.21334 -0.03332 -0.34 -0.01998 -0.38 z M132.79999999999998 4.24 l0 0.64 l1.1 0 l0 -0.64 l-1.1 0 z"></path></g></svg>
                  <div>-</div>
                  <h1 class="subtitle">Élevage de chatons Bengals sur Vaud</h1>
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

                    <p class="text-justify">Situé dans la campagne à côté d’Orbe, notre élevage de chats Bengals en Suisse est bien plus qu'un simple élevage – c’est une véritable passion. Nos chats vivent avec nous au quotidien, faisant partie intégrante de notre famille. Nous croyons fermement qu’un environnement familial est essentiel pour élever des chats équilibrés et sociables.</p>

                    <p class="text-justify">Notre objectif principal n’est pas de vendre des chatons, mais de contribuer à l’évolution de la race Bengal en sélectionnant soigneusement nos reproducteurs. Nous aspirons à élever des chats non seulement beaux, mais aussi dotés d’un tempérament exceptionnel. Notre engagement est de vous aider à trouver le compagnon idéal, parfaitement adapté à votre mode de vie et à vos attentes.</p>

                    <p class="text-justify">Notre approche a été reconnue et mise en lumière par l'émission de télévision TSR, qui a su capter l’essence de notre travail et notre dévouement. Vous pouvez visionner l’émission ci-dessous pour découvrir qui nous sommes vraiment.</p>
                    <iframe loading='lazy' class="iframe" height="370" src="https://www.rts.ch/play/embed?urn=urn:rts:video:14064982&subdivisions=false&startTime=51" allow="geolocation *; autoplay; encrypted-media"></iframe>

                    <p class="text-justify">La sélection de nos reproducteurs est le fruit de longues recherches et de collaborations avec des éleveurs qui partagent nos valeurs d’amour et de respect envers ces merveilleux félins. Après plusieurs années d'attente, nous avons finalement accueilli nos Bengals, issus de lignées prestigieuses avec des champions du monde dans leur pedigree.</p>

                    <p class="text-justify">Nous avons également créé un groupe sur Facebook dédié aux éleveurs suisses passionnés de Bengals. Ce groupe rassemble une communauté engagée où vous pouvez découvrir une grande variété de couleurs et de robes. Nous encourageons vivement les visites de notre élevage avant toute adoption, car il est essentiel de choisir un chaton élevé dans un environnement riche en interactions. Un chaton isolé, ne côtoyant que sa mère ou sa fratrie, risque de développer un comportement sauvage difficile à corriger par la suite.</p>

                    <p class="text-justify">Rejoignez notre communauté et découvrez des chats Bengals élevés avec passion, respect, et un souci constant de leur bien-être.</p>


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
                      <img loading="lazy" src="assets/img/tiktok_logo.webp" class="social-img" ></img>
                    </div>
                    <img loading="lazy" src="assets/img/tiktok.png" class="social-img"></img>
                  </a>
                </div>

                <div class="col-sm-4 facebook">
                  <a href='https://www.facebook.com/swissbengal1'>
                    <div>
                      <img loading="lazy" src="assets/img/Facebook-Logo.png" class="social-img"></img>
                    </div>
                    <img loading="lazy" src="assets/img/facebookqr.JPG" class="social-img"></img>
                  </a>
                </div>
                <div class="col-sm-4 insta">
                  <a href='https://instagram.com/swiss_happycat_bengal?igshid=MjEwN2IyYWYwYw=='>
                    <div>
                      <img loading="lazy" src="assets/img/instagram_logo.webp" class="social-img"></img>
                    </div>
                    <img loading="lazy" src="assets/img/insta.png" class="social-img"></img>
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
