import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokeapi/pokemon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  loaded=false;
  pokemon:any;
  image:any;
  cardTitle:any;
  imageShiny:any;
  cardTitleShiny:any;
  constructor(
    private _pokemonService: PokemonService
  ) { 
    this.image='../../../assets/noimage.png';
  }

  ngOnInit(): void {
  }
  searchPoke(keyword:string){
    console.log(keyword);
    this._pokemonService.getPokemon(keyword).subscribe(
      (Response:any)=>{
        console.log(Response);
        this.pokemon = Response;
        this.loaded=true;
        this.image=this.pokemon.sprites.front_default;
        this.cardTitle=this.pokemon.name;
        this.imageShiny=this.pokemon.sprites.front_shiny;
        this.cardTitleShiny=this.pokemon.name+' shiny';
      },
      Error=>{
        console.log(Error.error);
        this.loaded=true;
        this.image='../../../assets/noimage.png';
        this.cardTitle='Pokemon not found';
        this.imageShiny='../../../assets/noimage.png';
        this.cardTitleShiny='Pokemon not found';
      }
    );
  }
}
