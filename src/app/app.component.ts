import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import {PresentacionComponent} from './core/components/presentacion/presentacion.component';
import {ProductosComponent} from './core/components/productos/productos.component';
import {FooterComponent} from './core/components/footer/footer.component';
import {AcercadeComponent} from './core/components/acercade/acercade.component';

@Component({
  selector: 'app-root',
  imports: [
    PresentacionComponent,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'negocio';
}
