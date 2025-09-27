import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoCardComponent } from './producto-card/producto-card.component';

import { DatePipe,NgFor,NgIf,UpperCasePipe} from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DatePipe,UpperCasePipe,NgFor,NgIf,ProductoCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'Entrega1';
  fecha = new Date();
  nombre = 'german umaña';
  items=['Andres','German','Madeleine','Ligia','Valery'];
  nuevoItem='Pepe';
  subtitle= 'Uso de Interpolación y Pipes'
  isListVisible = false; // La variable que controla la visibilidad

  toggleList() {
    this.isListVisible = !this.isListVisible; // Alterna el valor
  }

  nombrePadre: string = "ESTE Mensaje es Enviado al componente de Producto-Card y desplegado desde el html de Producto-card";

}
