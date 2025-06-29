import { Component } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {TopbarListacomp} from '../../topbar-listacomp/topbar-listacomp';

@Component({
  selector: 'app-insumos',
  imports: [
    Sidebar,
    TopbarListacomp
  ],
  templateUrl: './insumos.html',
  styleUrl: './insumos.css'
})
export class Insumos {

}
