import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-precios',
  imports: [CommonModule],
  templateUrl: './precios.component.html',
  styleUrl: './precios.component.scss'
})
export class PreciosComponent {
  productos = [
    {
      nombre: 'Medialunas por docena',
      descripcion: 'Clásicas, dulces y esponjosas',
      precio: 600,
      imagen: '/assets/productos/medialunas.png'
    },
    {
      nombre: 'Tarta de Frutas',
      descripcion: 'Con crema pastelera y frutas frescas',
      precio: 1200,
      imagen: '/assets/productos/tarta-frutas.png'
    },
    {
      nombre: 'Alfajores Artesanales',
      descripcion: 'Rellenos con dulce de leche y bañados en chocolate',
      precio: 800,
      imagen: '/assets/productos/alfajores.png'
    },
    {
      nombre: 'Pan Casero por unidad (500g)',
      descripcion: 'Receta tradicional, crocante por fuera y suave por dentro',
      precio: 500,
      imagen: 'assets/productos/pan-casero.png'
    },
    {
      nombre: 'Cheesecake',
      descripcion: 'Con base de galletitas y topping de frutos rojos',
      precio: 1400,
      imagen: '/assets/productos/cheesecake.png'
    },
    {
      nombre: 'Bizcochuelo de Chocolate',
      descripcion: 'Húmedo y esponjoso, ideal para tortas',
      precio: 1000,
      imagen: '/assets/productos/biscochuelo.png'
    }
  ];
}
