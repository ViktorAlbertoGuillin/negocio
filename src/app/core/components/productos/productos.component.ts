import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent {
  productos = [
    { nombre: 'Pan', descripcion: 'Pan recién horneado todos los días.', icono: '🍞' },
    { nombre: 'Facturas', descripcion: 'Dulces tradicionales con dulce de leche.', icono: '🥐' },
    { nombre: 'Tortas', descripcion: 'Tortas decoradas para eventos.', icono: '🍰' },
    { nombre: 'Galletas', descripcion: 'Galletas crocantes y sabrosas.', icono: '🍪' },
    { nombre: 'Medialunas', descripcion: 'Clásicas medialunas de manteca.', icono: '🥯' },
    { nombre: 'Empanadas', descripcion: 'Empanadas saladas al horno.', icono: '🥟' }
  ];
}
