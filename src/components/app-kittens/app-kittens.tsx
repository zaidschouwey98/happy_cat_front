import { Component, Env, State, h } from '@stencil/core';

@Component({
  tag: 'app-kittens',
  styleUrl: 'app-kittens.css',
  shadow: false,
})
export class AppKittens {
  @State() kittens: [{ name: string, photos: Array<any> }];

  albumToKittens(data: any): any {
    const photoMap = {};
    data.photos.data.forEach(photo => {
      if (!photoMap[photo.name]) {
        photoMap[photo.name] = [];
      }
      photoMap[photo.name].push({ source: photo.source });
    });

    // Create the final array of objects with grouped photos
    const resultArray = Object.keys(photoMap).map(name => ({
      name: name,
      photos: photoMap[name]
    }));
    return resultArray;
  }

  async componentWillLoad() {
    document.title = "Chatons Bengals à adopter";

    // Mettre à jour la balise meta description
    let metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", "Découvrez nos chatons Bengal disponibles à l'adoption. Chaque chaton est en bonne santé, sociable et prêt à rejoindre un foyer aimant.");
    }

    if (sessionStorage.getItem('albums')) {
      const kittensAlb = JSON.parse(sessionStorage.getItem('albums')).find((album: any) => album.name === 'Chatons à placer et chats pour la retraite');
      if (kittensAlb === undefined) {
        console.error("Album chatons not found.");
      }
      this.kittens = this.albumToKittens(kittensAlb);
    }
    else {
      const albums = await fetch(`${Env.fbBaseApiUrl}/?fields=albums.fields(photos.fields(source,name),name)`);
      if (!albums.ok) {
        //@ts-ignore
        this.kittens = [];
        return;
      }
      const albumsJson = (await albums.json()).albums.data;
      sessionStorage.setItem('albums', JSON.stringify(albumsJson));
      this.kittens = this.albumToKittens(albumsJson.find((album: any) => album.name === 'Chatons à placer et chats pour la retraite'))
    }
  }
  componentDidLoad() {
    this.kittens.map((_, i) =>
      // @ts-ignore
      lightGallery(document.getElementById(`static-thumbnails-${i}`))
    )
  }
  render() {
    if (!this.kittens)
      return (<div>Loading...</div>)
    return (
      <div class="container-fluid">
        <div class="row bg-1-titles">
          <h1>Chatons Bengals Disponibles : Découvrez Nos Petits Compagnons à Adopter</h1>


          <p>Bienvenue sur notre page dédiée aux chatons Bengals actuellement disponibles à l'adoption ! Nous sommes ravis de vous présenter nos adorables petits compagnons qui cherchent leur nouvelle famille. Chaque chaton est élevé avec soin et affection, prêt à rejoindre un foyer aimant.</p>

          <p>Explorez les photos ci-dessous pour découvrir nos chatons actuels. Chaque image met en valeur les traits uniques de nos bébés Bengals, de leurs motifs élégants à leur personnalité charmante. Nous nous engageons à vous fournir des informations détaillées sur chaque chaton, y compris ses caractéristiques, son pedigree, et son tempérament.</p>

          <p>Nos chatons sont élevés dans un environnement familial, garantissant qu'ils sont bien socialisés et prêts à s’adapter à leur nouvelle vie avec vous. Si l'un de nos chatons vous intéresse ou si vous souhaitez obtenir plus de renseignements, n'hésitez pas à nous contacter.</p>

          <p>Nous sommes impatients de vous aider à trouver le compagnon parfait parmi nos chatons Bengals disponibles. Merci de votre intérêt et bonne visite !</p>
          <h2>Les prix décrits ci-dessous sont sujets à changement. Ils sont en vigueur en juillet 2024.</h2>

          <ul>
            <li>Les prix pour nos chatons marbrés varient de 1500$ à 1700$</li>
            <li>Les prix pour nos chatons browns à rosettes varient de 1700$ à 2000$</li>
            <li>Les prix pour nos chatons snow à rosettes varient de 1800$ à 2100$</li>
            <li>Les prix pour nos chatons silver à rosettes varient de 1900$ à 2200$</li>
            <li>Les prix pour nos chatons charcoal à rosettes varient de 2200$ à 2500$</li>
          </ul>

          <h3>Ce qui est inclus :</h3>
          <ul>
            <li>Une garantie de santé héréditaire et congénitale de 2 ans</li>
            <li>Vaccins 2x</li>
            <li>Vermifuges 3x</li>
            <li>Enregistrement de portée et pedigree</li>
            <li>Examen de santé et carnet du vétérinaire</li>
            <li>Kit de départ Royal Canin</li>
            <li>Mon soutien à vie!</li>
          </ul>

          <p>La sélection des chatons se fait sur réservation, autour de la 4e semaine du chaton, avec un dépôt de 400$, non remboursable. L’éleveur se réserve le premier choix pour d’éventuels reproducteurs. Les premières personnes contactées sont celles sur ma liste d’attente. Vous désirez être sur ma liste d’attente?</p>

          <p><strong>Contactez-nous !</strong></p>
        </div>
        {this.kittens.map((kitten, i) => {
          return (
            <div class={`row ${(i + 1) % 2 === 0 ? "bg-1" : "bg-2"} text-center`}>
              <h2>Chatons disponibles</h2>
              <div class="text-center" id={`static-thumbnails-${i}`}>
                {kitten.photos.map((photo: any) => {
                  return <a href={photo.source}><img src={photo.source}></img></a>
                })}
              </div>
            </div>
          )
        })}

      </div>
    );
  }

}
