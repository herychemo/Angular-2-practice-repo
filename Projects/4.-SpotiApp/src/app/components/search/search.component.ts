import { Component, OnInit } from '@angular/core';

import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  constructor(private _SpotifyService:SpotifyService) { }

  ngOnInit() {
      this._SpotifyService.getArtists("Dragon").subscribe( data => {
          console.log("My Data");
          console.log(data);
      } );
  }

}
