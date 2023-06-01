import { Component, Env, State, h } from '@stencil/core';

@Component({
  tag: 'app-cats',
  styleUrl: 'app-cats.css',
  shadow: false,
})
export class AppCats {
  @State() albums: [{ name: string,id:number, photos: { data: [] } }];
  async componentWillLoad() {
    if(localStorage.getItem('albums')){
      this.albums = JSON.parse(localStorage.getItem('albums'));
    }
    else{
      const albums = await fetch(`${Env.fbBaseApiUrl}/?fields=albums.fields(photos.fields(source,name),name)`);
      if(!albums.ok){
        //@ts-ignore
        this.albums = []
        return;
      }
      this.albums = (await albums.json()).albums.data;
      localStorage.setItem('albums',JSON.stringify(this.albums));
    }
  }
  render() {
    return (
      <div class="container-fluid">
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
        <h4 id="scrollspyHeading1">Parents</h4>
        <h4 id="scrollspyHeading2">Chatons disponible</h4>
      </div>
      </div>
    );
  }

}
