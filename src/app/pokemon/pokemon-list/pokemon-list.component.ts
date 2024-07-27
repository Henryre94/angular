import { Component } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';



@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, PokemonDetailComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {


  pokemonList: Pokemon[] = [{
    id: 1,
    name: "Squirtle",
    type: "water",
    isCool: true
  },
  {
    id: 2,
    name: "Charmander",
    type: "fire",
    isCool: true
  },
  {
    id: 3,
    name: "Bulbasor",
    type: "plant",
    isCool: false
  }]


  constructor() {
    
  }

  handleRemove(event: Pokemon){
    this.pokemonList = this.pokemonList.filter((pokemonList: Pokemon) => {
        return pokemonList.id !== event.id;
    })
  }

  

}
