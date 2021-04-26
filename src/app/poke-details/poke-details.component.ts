import { Component, Input, OnInit } from '@angular/core';
import { PokeShareInfoService } from '../poke-share-info.service';
import { PokemonDetails } from '../pokemon';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css']
})
export class PokeDetailsComponent implements OnInit {

  @Input('details')
  details: PokemonDetails

  constructor(private pokeShareInfoService: PokeShareInfoService) {

    this.pokeShareInfoService.getObservable().subscribe(e =>
      console.log('e : ' + e)
    )

  }

  ngOnInit(): void {
  }

}
