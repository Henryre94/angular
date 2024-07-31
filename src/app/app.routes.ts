import { PokemonDetailComponent } from './pokemon/pokemon-detail/pokemon-detail.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { Pokemon } from './models/pokemon';
import { Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonTemplateFormComponent } from './pokemon/pokemon-template-form/pokemon-template-form.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'',
        children: [
          {path:'', component: HomeComponent},
          {path:'pokemon', component: PokemonListComponent},
          {path:'pokemon/form', component: PokemonTemplateFormComponent},
          {path:'pokemon/:id', component: PokemonTemplateFormComponent}
        ]
      }
];
