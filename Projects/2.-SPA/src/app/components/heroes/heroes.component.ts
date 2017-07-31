import { Component, OnInit } from '@angular/core';
import {Heroe, HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

    private heroes:any[] = []

    constructor(  private _HeroesService:HeroesService  ) {
        console.log("HeroesComponent constructor()");
    }

    ngOnInit() {
        console.log("HeroesComponent ngOnInit()");
        this.heroes = this._HeroesService.getHeroes();
    }

}
