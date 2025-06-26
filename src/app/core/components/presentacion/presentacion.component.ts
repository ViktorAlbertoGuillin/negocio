import { Component } from '@angular/core';
import {AcercadeComponent} from "../acercade/acercade.component";
import {ProductosComponent} from "../productos/productos.component";
import {FooterComponent} from '../footer/footer.component';
import {OfertasComponent} from '../ofertas/ofertas.component';
import {PreciosComponent} from '../precios/precios.component';
import {GaleriaComponent} from '../galeria/galeria.component';

@Component({
  selector: 'app-presentacion',
    imports: [
      AcercadeComponent,
      OfertasComponent,
      PreciosComponent,
      GaleriaComponent,
      FooterComponent,
    ],
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.scss'
})
export class PresentacionComponent {

}
