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
    if (localStorage.getItem('albums')) {
      this.albums = JSON.parse(localStorage.getItem('albums'));
    }
    else {
      const albums = await fetch(`${Env.fbBaseApiUrl}/?fields=albums.fields(photos.fields(source,name),name)`);
      if (!albums.ok) {
        //@ts-ignore
        this.albums = []
        return;
      }
      this.albums = (await albums.json()).albums.data;
      localStorage.setItem('albums', JSON.stringify(this.albums));
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
      if(!this.albums[i].hasOwnProperty("photos")){
        console.log(this.albums[i].name)
        this.albums.splice(i, 1);
      }
    }
    return (
      <div class="container-fluid" >
        {
          this.albums.map((album, i) => {
              return (
                <div class={`row ${(i + 1) % 2 === 0 ? "bg-2" : "bg-1"} text-center`}>
                  <h3>Album {album.name}</h3>
                  <div class="text-center" id={`static-thumbnails-${i}`}>
                    {album.photos?.data?.map((photo: any) => {
                      return <a href={photo.source}><img src={photo.source}></img></a>
                    })}
                  </div>
                </div>
              )
          }
          )
        }
      </div>
    );
  }

}
