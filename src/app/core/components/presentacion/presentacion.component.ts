import { Component } from '@angular/core';
import {AcercadeComponent} from "../acercade/acercade.component";
import {ProductosComponent} from "../productos/productos.component";
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-presentacion',
    imports: [
      AcercadeComponent,
      ProductosComponent,
      FooterComponent,
    ],
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.scss'
})
export class PresentacionComponent {

}
