import { Component } from '@angular/core';
import {CommonModule, NgClass} from '@angular/common';

@Component({
  selector: 'app-precios',
  imports: [CommonModule],
  templateUrl: './precios.component.html',
  styleUrl: './precios.component.scss'
})
export class PreciosComponent {
  productos = [
    {
      nombre: 'Medialunas',
      descripcion: 'Clásicas, dulces y esponjosas',
      precio: 600,
      imagen: 'assets/images/medialunas.jpg'
    },
    {
      nombre: 'Tarta de Frutas',
      descripcion: 'Con crema pastelera y frutas frescas',
      precio: 1200,
      imagen: 'assets/images/tarta-frutas.jpg'
    },
    {
      nombre: 'Alfajores Artesanales',
      descripcion: 'Rellenos con dulce de leche y bañados en chocolate',
      precio: 800,
      imagen: 'assets/images/alfajores.jpg'
    },
    {
      nombre: 'Pan Casero',
      descripcion: 'Receta tradicional, crocante por fuera y suave por dentro',
      precio: 500,
      imagen: 'assets/images/pan-casero.jpg'
    },
    {
      nombre: 'Cheesecake',
      descripcion: 'Con base de galletitas y topping de frutos rojos',
      precio: 1400,
      imagen: 'assets/images/cheesecake.jpg'
    },
    {
      nombre: 'Bizcochuelo de Chocolate',
      descripcion: 'Húmedo y con cobertura de chocolate',
      precio: 1000,
      imagen: 'assets/images/bizcochuelo.jpg'
    }
  ];
}
