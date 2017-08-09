import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

// current token: BQCY4tM_q_vWcwbfzniWCw-DwSsr020ujktVEap1xffw4KxHFDXfcoCeCyBj7FwXK-PWm0im0ChkMhgJhNNrKw

@Injectable()
export class SpotifyService {

    artists:any[] = [];

    urlSearch : string = "https://api.spotify.com/v1/search";
    urlArtist : string = "https://api.spotify.com/v1/artists";

    private token = 'BQBfV-ClAvdSh0XcKV7Yz7cVAEKOcn3mlSc1L6RRj7BcYfBzDF781wt1GALDhjbTtFz5Pz46VPOJquYJsaPEkA';

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

}
