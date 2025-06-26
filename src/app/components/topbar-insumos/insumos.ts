import { Component } from '@angular/core';
import {TopbarListacomp} from '../topbar-listacomp/topbar-listacomp';
import {Sidebar} from '../sidebar/sidebar';

@Component({
  selector: 'app-insumos',
  imports: [
    TopbarListacomp,
    Sidebar
  ],
  templateUrl: './insumos.html',
  styleUrl: './insumos.css'
})
export class Insumos {

}
