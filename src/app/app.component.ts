import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { PokemonService } from '../services/pokemon.service';
import { HttpClientModule} from '@angular/common/http';
import { PokemonTemplateFormComponent } from './pokemon-template-form/pokemon-template-form.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, PokemonModule, HttpClientModule, PokemonTemplateFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    PokemonService
  ]
})
export class AppComponent {


  title: string;

  constructor() {
    this.title = "pokemon-angular-app"
  }



  


}
