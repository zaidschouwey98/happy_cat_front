import { Component, Env, State, h } from '@stencil/core';

@Component({
  tag: 'app-kittens',
  styleUrl: 'app-kittens.css',
  shadow: true,
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
    if (sessionStorage.getItem('albums')) {
      const kittensAlb = JSON.parse(sessionStorage.getItem('albums')).find((album: any) => album.name === 'Chatons');
      this.kittens = this.albumToKittens(kittensAlb);
    }
    else {
      const albums = await fetch(`${Env.fbBaseApiUrl}/?fields=albums.fields(photos.fields(source,name),name)`);
      if (!albums.ok) {
        //@ts-ignore
        this.kittens = []
        return;
      }
      const albumsJson = (await albums.json()).albums.data;
      sessionStorage.setItem('albums', JSON.stringify(albumsJson));
      this.kittens = this.albumToKittens(albumsJson.find((album: any) => album.name === 'Chatons'))
    }
  }
  componentDidLoad() {
    this.kittens.map((_, i) =>
      // @ts-ignore
      lightGallery(document.getElementById(`static-thumbnails-${i}`))
    )
  }
  render() {
    return (
      <div class="container-fluid">
        <div class="text-center">
        {this.kittens.map((kitten,i) =>{
          return (
            <div class={`row ${(i + 1) % 2 === 0 ? "bg-2" : "bg-1"} text-center`}>
              <h3>{kitten.name}</h3>
              <div class="text-center" id={`static-thumbnails-${i}`}>
                {kitten.photos.map((photo: any) => {
                  return <a href={photo.source}><img src={photo.source}></img></a>
                })}
              </div>
            </div>
          )
        })}
        </div>
      </div>
    );
  }

}
