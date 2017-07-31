import { Component, OnInit } from '@angular/core';

import {Heroe, HeroesService} from '../../services/heroes.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent /*implements OnInit */{

    private heroe:Heroe;

    constructor( private activatedRouter:ActivatedRoute,  private _HeroesService:HeroesService  ) {
        this.activatedRouter.params.subscribe( params => {
            console.log( params );
            this.heroe = this._HeroesService.getHeroe(params["id"]);
        });
    }

    //ngOnInit() {}

}
