import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

// current token: BQCY4tM_q_vWcwbfzniWCw-DwSsr020ujktVEap1xffw4KxHFDXfcoCeCyBj7FwXK-PWm0im0ChkMhgJhNNrKw

@Injectable()
export class SpotifyService {

    artists:any[] = [];

    urlSearch : string = "https://api.spotify.com/v1/search";

  constructor(private http:Http) { }

  getArtists(term:string){
      let token = 'BQDbV5d6PisyFOmQnV4uUr_-he5FYQ70Ca7omf-_KGGRaU155Eby4dK0eoDQB4TJX9vcNg5h0gxjx1ODkb6cAw';
      let headers = new Headers();
      headers.append( 'Authorization', `Bearer ${token}`);

      let query = `?q=${term}&type=artist`;
      let url = this.urlSearch + query;

      return this.http.get(url, {headers:headers})
                .map( res => {
                    this.artists = res.json().artists.items;
                    console.log( this.artists );
                    return this.artists
                });
  }

}
