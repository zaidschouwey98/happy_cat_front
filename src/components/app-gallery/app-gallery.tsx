import { Component, Env, State, h } from '@stencil/core';


@Component({
  tag: 'app-gallery',
  styleUrl: 'app-gallery.css',
  shadow: false,
})
export class AppGallery {
  @State() selectedImage:Partial<{photoIndex:number, albumIndex:any}> = null;
  @State() albums: [{ name: string,id:number, photos: { data: [] } }];
  @State() refresh:boolean = false;
  async componentWillLoad() {
    if(localStorage.getItem('albums')){
      console.log("GETALBUMS")
      this.albums = JSON.parse(localStorage.getItem('albums'));
      console.log(localStorage.getItem('albums'))
    }
    else{
      const albums = await fetch(`${Env.fbBaseApiUrl}/?fields=albums.fields(photos.fields(source),name)`);
      this.albums = (await albums.json()).albums.data;
      localStorage.setItem('albums',JSON.stringify(this.albums));
    }
  }

  selectImage(album,photo){
    const currentAlbum = this.albums[this.albums.findIndex((alb)=>alb.id === album.id)];
    const currentphotoIndex = currentAlbum.photos.data.findIndex((ph:any)=>ph.id === photo.id)
    this.selectedImage = {};
    this.selectedImage.albumIndex = this.albums.findIndex((alb)=>alb.id === album.id);
    this.selectedImage.photoIndex = currentphotoIndex;
    
    this.refresh = !this.refresh;
  }

  render() {
    if(!this.albums)
      return;
    return (
      <div class="container-fluid">
        {
          this.albums.map((album) =>{
            if(album.photos?.data?.length === 0) return;
            return (
              <div class="row">
                <h4>Album {album.name}</h4>
                <div class="text-center">
                  {album.photos?.data?.map((photo:any)=>{
                    return <img onClick={() => this.selectImage(album,photo)} src={photo.source}></img>
                  })}
                </div>
              </div>
            )
          }
          
          )
        }
        {this.selectedImage !== null && (
        <div class="modal">
          <div class="modal-content">
            <img src={(this.albums[this.selectedImage.albumIndex].photos.data[this.selectedImage.photoIndex] as any).source} class="img-fluid" />
          </div>
        </div>
      )}
      </div>
    );
  }

}
