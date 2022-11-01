import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../interfaces';
import { PikachuService } from '../services/pikachu.service';

@Component({
  selector: 'app-pikachu',
  templateUrl: './pikachu.component.html',
})
export class PikachuComponent implements OnInit {

  public pikachu?: Pokemon;

  constructor( private pokemonService: PikachuService ) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon(25)
    .subscribe( pokemon => {
      this.pikachu = pokemon;
      // console.log( pokemon );
    });
  }

}
