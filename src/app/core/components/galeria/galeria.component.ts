import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-galeria',
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent {
  productos = [
    { nombre: 'Tarta de Frutilla', img: 'assets/images/productos/producto1.jpg' },
    { nombre: 'Pan Casero', img: 'assets/images/productos/producto2.jpg' },
    { nombre: 'Cupcakes', img: 'assets/images/productos/producto3.jpg' },
  ];

  clientes = [
    { nombre: 'María', img: 'assets/images/clientes/cliente1.jpg' },
    { nombre: 'Lucas', img: 'assets/images/clientes/cliente2.jpg' },
    { nombre: 'Valentina', img: 'assets/images/clientes/cliente3.jpg' },
  ];

}
