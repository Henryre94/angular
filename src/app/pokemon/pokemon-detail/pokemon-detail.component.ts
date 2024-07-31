import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../models/pokemon';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule, RouterLink ],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent {

  @Input()
  detail!: Pokemon;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();


  onRemove() {
    this.remove.emit(this.detail)
  }





}
