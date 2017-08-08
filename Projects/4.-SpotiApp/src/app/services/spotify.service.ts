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
      let headers = new Headers();
      headers.append( 'Authorization', "Bearer BQAVSzzgATNVbMRarcnXQRMc7U-2iSWNKejV_UG84MxIipg76adqXfUFsFIAuiF6UrGDsrTn0dUBVs__GcmJvA" );

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
