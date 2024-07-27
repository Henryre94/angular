import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, PokemonListComponent, PokemonDetailComponent
  ],
  exports: [
    PokemonListComponent, PokemonDetailComponent
  ]
})
export class PokemonModule { }
