import {
  Component,
  ElementRef,
  Renderer2,
  viewChild,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { PokemonService } from '../../_service/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, PokemonDetailComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
})
export class PokemonListComponent {
  pokemonList: Pokemon[] = [];

  @ViewChildren('pokemonRef') pokemonRef!: ElementRef;
  @ViewChild('pokemonDiv') pokemonDiv!: ElementRef;

  constructor(
    private pokemonService: PokemonService,
    private renderer: Renderer2
  ) {}

  handleRemove(event: Pokemon) {
    this.pokemonList = this.pokemonList.filter((pokemonList: Pokemon) => {
      return pokemonList.id !== event.id;
    });
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((data: Pokemon[]) => {
      this.pokemonList = data;
    });
  }

  ngAfterViewInit(): void {
    // Example to how to use ElementRef and nativeElement
    this.pokemonDiv.nativeElement.innerText = 'Pokemon Name';

    // Example to how to use Renderer2
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Pokemon List');
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.pokemonDiv.nativeElement, div);
  }
}
