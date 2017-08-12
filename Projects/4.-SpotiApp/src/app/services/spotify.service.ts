import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService {

    artists:any[] = [];

    urlSearch : string = "https://api.spotify.com/v1/search";
    urlArtist : string = "https://api.spotify.com/v1/artists";

    private readonly CLIENT_ID = '94fe9dff5bb041b9b9f8fb20919df769';
    private readonly CLIENT_SECRET = '0f1f62121182434babcce82f55515c33';

    private token = 'BQBo0f7Dq2j-HW9Ucw2pxv9hz0fOqFJqb3cq6V4aIhnJLwykU1hBpWM2Q5M3nIcG6zpSuzBoKX9d5dWnLSoH1A';

  constructor(private http:Http) { }

  private getBaseHeaders(){
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      return headers;
  }

/*  private updateToken(){
      let token_url = 'https://accounts.spotify.com/api/token';
      let headers = this.getBaseHeaders();
      headers.append('Content-Type', 'application/json');
      //let request_body : string = "client_id=94fe9dff5bb041b9b9f8fb20919df769&client_secret=0f1f62121182434babcce82f55515c33&grant_type=client_credentials";
      let request_body : string = `{
          "client_id" : "94fe9dff5bb041b9b9f8fb20919df769",
          "client_secret" : "0f1f62121182434babcce82f55515c33",
          "grant_type" : "client_credentials"
      }`
      return this.http.post( token_url, request_body , { headers : headers } ).map( res => {
          return res.json();
      } );
  }*/

  getArtists(term:string){

      let headers = this.getBaseHeaders();
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
      let headers = this.getBaseHeaders();;
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
      let headers = this.getBaseHeaders();;
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
