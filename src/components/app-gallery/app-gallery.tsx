import { Component, Env, State, h } from '@stencil/core';


@Component({
  tag: 'app-gallery',
  styleUrl: 'app-gallery.css',
  shadow: false,
})
export class AppGallery {
  @State() selectedImage: Partial<{ photoIndex: number, albumIndex: any }> = null;
  @State() albums: [{ name: string, id: number, photos: { data: [] } }];
  @State() refresh: boolean = false;
  async componentWillLoad() {
    if (sessionStorage.getItem('albums')) {
      this.albums = JSON.parse(sessionStorage.getItem('albums'));
    }
    else {
      const albums = await fetch(`${Env.fbBaseApiUrl}/?fields=albums.fields(photos.fields(source,name),name)`);
      if (!albums.ok) {
        //@ts-ignore
        this.albums = []
        return;
      }
      this.albums = (await albums.json()).albums.data;
      sessionStorage.setItem('albums', JSON.stringify(this.albums));
    }
  }

  componentDidLoad() {
    this.albums.map((_, i) =>
      // @ts-ignore
      lightGallery(document.getElementById(`static-thumbnails-${i}`))
    )
  }

  render() {
    //@ts-ignore
    if (this.albums.length === 0)
      return <div class="container-fluid">Loading...</div>;
    for (let i = 0; i < this.albums.length; i++) {
      if (!this.albums[i].hasOwnProperty("photos")) {
        this.albums.splice(i, 1);
      }
    }
    return (
      <div class="container-fluid" >
        <div class="row bg-1-titles text-center">
          <div class="row title-block">
            <div class="col-sm-12"><h1 style={{ "color": "#24211A" }}>Galerie de nos chats Bengals</h1></div>
            <br></br>
            <div class="col-sm-2"></div>
            <div class="col-sm-8 mt-5 text-center">

              <div class="row">
                <div class="col-sm-5"></div>
                <div class="col-sm-7">              <p class="description text-center p1">Bienvenue dans la galerie de notre élevage de chats Bengals ! Découvrez ici une sélection de photos mettant en avant nos magnifiques chatons et chats adultes. Chaque image capture la beauté, le caractère et le charme unique de nos Bengals, élevés avec passion et dévouement.</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-7">              <p class="description text-center p2">Parcourez nos albums pour admirer les différentes robes et personnalités de nos compagnons félins. Nos chatons sont photographiés à différents stades de leur développement, montrant leur évolution et leurs traits distinctifs. Vous trouverez également des portraits de nos chats adultes, illustrant leur élégance et leur caractère exceptionnel.</p>
                </div>
                <div class="col-sm-5"></div>
              </div>
              <div class="row">
                <div class="col-sm-5"></div>
                <div class="col-sm-7">              <p class="description  text-center p3">Nous espérons que ces images vous donneront un aperçu de la qualité et de la beauté de nos chats Bengals. Si vous avez des questions sur nos chats ou si vous souhaitez en savoir plus sur l’un d’entre eux, n’hésitez pas à nous contacter.</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-7">            <p class="description text-center p4">Merci de votre visite et profitez de la découverte de nos précieux félins !</p>
                </div>
                <div class="col-sm-5"></div>
              </div>
              {/* <div class="row">
                {
                  this.albums.map((album) => {
                    return (
                      <div class="col">
                        <button class="btn btn-primary">{album.name}</button>
                      </div>

                    )
                  })
                }
              </div> */}
            </div>
          </div>
          <div class="col-sm-2"></div>
        </div>

        {
          this.albums.map((album, i) => {
            return (
              <div class={`row ${(i + 1) % 2 === 0 ? "bg-2" : "bg-1"} text-center`}>
                <h2 class="mb-5">Album {album.name}</h2>
                <div class="text-center" id={`static-thumbnails-${i}`}>
                  {album.photos?.data?.map((photo: any) => {
                    return <a href={photo.source}><img src={photo.source}></img></a>
                  })}
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }

}
