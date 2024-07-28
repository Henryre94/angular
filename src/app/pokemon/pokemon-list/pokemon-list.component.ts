import { Component } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { PokemonService } from '../../../services/pokemon.service';



@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, PokemonDetailComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {

  pokemonList!: Pokemon[];

  constructor(private pokemonService: PokemonService) {
    
  }

  handleRemove(event: Pokemon){
    this.pokemonList = this.pokemonList.filter((pokemonList: Pokemon) => {
        return pokemonList.id !== event.id;
    })
  }


  ngOnInit(): void {
   this.pokemonService.getPokemons().subscribe((data: Pokemon[]) => {
    this.pokemonList = data;
   });
  }

  

}
