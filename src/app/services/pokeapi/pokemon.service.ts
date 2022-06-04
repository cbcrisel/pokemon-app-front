import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient
  
  ) { }

  getPokemon(keyword:string){
    const url = `https://pokeapi.co/api/v2/pokemon/${keyword}`;
    return this.http.get(url);
  }
}
