import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, PokemonDetails, PokeServiceRes } from './pokemon';

const url = 'https://pokeapi.co/api/v2/pokemon/';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {


  constructor(private http: HttpClient) {
  }

  getPokemons(): Observable<PokeServiceRes> {
    return this.http.get<PokeServiceRes>(url);
  }

  getPokemonInfo(id: String): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(url + id)
  }

}
