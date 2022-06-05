import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient
  
  ) { }

  getPokemon(keyword:string,imageType:string){
    const url = `http://localhost:3000/api/v1/images/pokemons?name=${keyword}&imageType=${imageType}`;
    return this.http.get(url);
  }
}
