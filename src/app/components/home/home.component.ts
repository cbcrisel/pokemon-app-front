import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  empty:boolean=false;
  pokemons:any;
  constructor() { 
    
  }

  ngOnInit(): void {
    this.pokemons=JSON.parse(localStorage.getItem('pokemon')|| '{}');
    console.log(this.pokemons);
    if(this.pokemons!={}){
      this.empty=true;
      console.log("hij")
    }
  }

}
