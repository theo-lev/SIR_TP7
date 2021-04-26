import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from '../poke-api.service';
import { PokeShareInfoService } from '../poke-share-info.service';
import { Pokemon, PokemonDetails } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIService]
})
export class MyComponentComponent implements OnInit {

  id: string;
  selectedPokemonId: String;
  searchPokeName: String = '';
  pokemons: Pokemon[] = [];
  pokeDetails: PokemonDetails;

  constructor(private pokeService: PokeAPIService, private pokeShareInfoService: PokeShareInfoService) {
  }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) => {
      data.results.forEach((e, index) => {
        this.pokemons.push(new Pokemon(index+1 +'', e.name));
      })
    });
  }

  go() {
    if (this.selectedPokemonId != '') {
      this.pokeService.getPokemonInfo(this.selectedPokemonId).subscribe((data) => {
        this.pokeDetails = data;
        this.pokeShareInfoService.setValue(this.selectedPokemonId.toString());
      });
    }
  }

}
