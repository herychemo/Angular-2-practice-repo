import { Component, OnInit } from '@angular/core';

import {Heroe, HeroesService} from '../../services/heroes.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent /*implements OnInit*/ {

    private term:string = "";
    private heroes:Heroe[] = []

    constructor(private router:Router, private activatedRouter:ActivatedRoute, private _HeroesService:HeroesService) {
        this.activatedRouter.params.subscribe( params => {
            this.term = params["term"];
            if( this.term.trim().length == 0 )
                this.router.navigate(["/heroes"]);
            else
                this.heroes = this._HeroesService.buscarHeroes( this.term );
        });
    }
    //ngOnInit() {}

}
