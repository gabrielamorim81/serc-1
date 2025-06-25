import { Component } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {TopbarListacomp} from '../../topbar-listacomp/topbar-listacomp';

@Component({
  selector: 'app-composicoes',
  imports: [Sidebar, TopbarListacomp],
  templateUrl: './composicoes.html',
  styleUrl: './composicoes.css'
})
export class Composicoes {

}
