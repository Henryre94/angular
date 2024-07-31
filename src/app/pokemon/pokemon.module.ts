import { routes } from './../app.routes';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PokemonTemplateFormComponent } from './pokemon-template-form/pokemon-template-form.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, PokemonListComponent, PokemonDetailComponent, FormsModule, RouterModule, PokemonTemplateFormComponent
  ],
  exports: [
    PokemonListComponent, PokemonDetailComponent, PokemonTemplateFormComponent, RouterModule
  ],
  bootstrap: []
})
export class PokemonModule { }
