import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-galeria',
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent {

  clientes = [
    { nombre: 'Juli', img: '/assets/clientes/juli.png' },
    { nombre: 'Cande', img: '/assets/clientes/cande2.png' },
    { nombre: 'Octavio', img: '/assets/clientes/octavio2.png' },
  ];

}
