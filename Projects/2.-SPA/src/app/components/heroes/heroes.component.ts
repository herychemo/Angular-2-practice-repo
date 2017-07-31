import { Component, OnInit } from '@angular/core';
import {Heroe, HeroesService} from '../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

    private heroes:Heroe[] = []

    constructor(  private _HeroesService:HeroesService ,
                    private router:Router) {
        console.log("HeroesComponent constructor()");
    }

    ngOnInit() {
        console.log("HeroesComponent ngOnInit()");
        this.heroes = this._HeroesService.getHeroes();
        console.log(this.heroes);
    }

    verHeroe(idx:number){
        console.log(`index: ${idx}`);
        this.router.navigate(["/heroe", idx]);
    }

}
