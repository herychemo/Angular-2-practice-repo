import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {SpotifyService} from '../../services/spotify.service'

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

    artist : any;
    top_tracks :any[];

  constructor(private activatedRoute:ActivatedRoute, private _SpotifyService : SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params.map( params => params['id'] )
        .subscribe( id => {
            console.log( id );
            this._SpotifyService.getArtist( id ).subscribe( (data) => this.artist = data );
            this._SpotifyService.getArtistTop( id ).subscribe( (data) => this.top_tracks = data );
        });

  }

}
