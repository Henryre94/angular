import { Pokemon } from './../models/pokemon';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { error } from 'console';
import { PokemonType } from './../models/pokemon';

@Component({
  standalone: true,
  selector: 'app-pokemon-template-form',
  templateUrl: './pokemon-template-form.component.html',
  styleUrls: ['./pokemon-template-form.component.css'],
  imports: [CommonModule, FormsModule]
})
export class PokemonTemplateFormComponent implements OnInit {

  pokemon!: Pokemon;
  pokemonType: PokemonType[] = [
    {
      key: 0,
      value: 'Fire'
    },
    {
      key: 1,
      value: 'water'
    },
    {
      key: 2,
      value: 'Plant'
    },

  ]


  constructor(private pokemonService: PokemonService) {
    
  }

  toggleIsCool(object: any){
    console.log(object)
  }

  handleSubmit(object: any) {
    console.log(object);
  }



  ngOnInit() {
      this.pokemon = {} as Pokemon;
      this.pokemonService.getPokemon(1).subscribe(
        (data: Pokemon)=>{
      this.pokemon = data;
    });
  }

}
