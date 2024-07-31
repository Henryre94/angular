import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { PokemonService } from './_service/pokemon.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
    PokemonModule,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [PokemonService],
})
export class AppComponent {
  title: string;

  constructor() {
    this.title = 'pokemon-angular-app';
  }
}
