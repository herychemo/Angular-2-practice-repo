import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService {

    artists:any[] = [];

    urlSearch : string = "https://api.spotify.com/v1/search";
    urlArtist : string = "https://api.spotify.com/v1/artists";

    private token = 'BQCLYbucNK1opJ3RhWj6Wy15PwlPMAhPWorxLWJq5sifqk6sA1VLA-Pimark-mhFAqcm878w4bsS3TUMihaoWw';

  constructor(private http:Http) { }

  getArtists(term:string){
      let headers = new Headers();
      headers.append( 'Authorization', `Bearer ${this.token}`);

      let query = `?q=${term}&type=artist`;
      let url = this.urlSearch + query;

      return this.http.get(url, {headers:headers})
                .map( res => {
                    this.artists = res.json().artists.items;
                    console.log( this.artists );
                    return this.artists
                });
  }
  getArtist(id:string){
      let headers = new Headers();
      headers.append( 'Authorization', `Bearer ${this.token}`);

      let query = `/${id}`;
      let url = this.urlArtist + query;

      return this.http.get(url, {headers:headers})
                .map( res =>{
                    let artist = res.json();
                    console.log( artist );
                    return artist;
                });
  }

  getArtistTop(id:string){
      let headers = new Headers();
      headers.append( 'Authorization', `Bearer ${this.token}`);

      let query = `/${id}/top-tracks?country=US`;
      let url = this.urlArtist + query;

      return this.http.get(url, {headers:headers})
                .map( res =>{
                    let top_tracks = res.json();
                    console.log( top_tracks );
                    return top_tracks.tracks;
                });
  }



}
