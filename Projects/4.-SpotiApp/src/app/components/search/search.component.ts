import { Component, OnInit } from '@angular/core';

import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

    termi:string = '';

  constructor(private _SpotifyService:SpotifyService) { }

  ngOnInit() {
      //
  }
  searchArtist(){
      this._SpotifyService.getArtists(this.termi).subscribe( );
  }

}
