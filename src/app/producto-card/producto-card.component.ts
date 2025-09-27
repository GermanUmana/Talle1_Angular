import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-producto-card',
  imports: [],
  templateUrl: './producto-card.component.html',
  styleUrl: './producto-card.component.css'
})

export class ProductoCardComponent {
  @Input() nombre:string='';
}
