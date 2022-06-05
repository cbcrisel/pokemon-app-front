import { Component, OnInit } from '@angular/core';
import { saveAs} from 'file-saver';
import { NgForm } from '@angular/forms';
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
  searches:any[] =[];
  constructor(
    private _pokemonService: PokemonService
  ) { 
    this.image='../../../assets/noimage.png';
  }

  ngOnInit(): void {
  }
  download(){
    saveAs(this.image,this.pokemon.name);
  }
  searchPoke(keyword:string,forma:NgForm){
    console.log(keyword);
    console.log(forma.value.imageType);
    this._pokemonService.getPokemon(keyword,forma.value.imageType).subscribe(
      (Response:any)=>{
        console.log(Response);
        this.pokemon = Response;
        this.loaded=true;
        this.image=this.pokemon.image;
        this.searches.push(this.pokemon);
        localStorage.setItem('pokemon',JSON.stringify(this.searches));
      },
      Error=>{
        console.log(Error.error);
        this.loaded=true;
        this.image='../../../assets/noimage.png';
        this.cardTitle='Pokemon not found';
      }
    );
  }
}
