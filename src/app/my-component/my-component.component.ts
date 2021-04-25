import { Component, OnInit } from '@angular/core';
import { PokeAPIServiceService } from '../poke-apiservice.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIServiceService]
})
export class MyComponentComponent implements OnInit {

  id: string;
  selectedPokemonId: String;
  searchPokeName = '';
  pokemons: Pokemon[] = [];

  constructor(private pokeService: PokeAPIServiceService) {
  }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) => {
      data.results.forEach((e, index) => {
        this.pokemons.push(new Pokemon(index +'', e.name));
      })
    });
  }

  go() {
    console.log(this.selectedPokemonId);
  }

}
