import { Component } from '@angular/core';
import {Sidebar} from '../../sidebar/sidebar';
import {FormsModule} from '@angular/forms';
import {InsumosService} from '../../../services/insumos';

@Component({
  selector: 'app-relatorios',
  imports: [
    Sidebar,
    FormsModule
  ],
  templateUrl: './relatorios.html',
  styleUrl: './relatorios.css'
})
export class Relatorios {
  searchBy='';
  tipo='PROPIO';
  query=  '';
  periodo= '';
  resultados: any [] = [];


  constructor(private insSvc: InsumosService) {
  }

  buscar() {
    if (!this.query) {
      this.resultados = [];
      return;
    }

    let obs$;

    if (this.searchBy === 'codigo') {
      obs$ = this.insSvc.buscarPorCodigo(this.query, this.tipo, this.periodo);
    } else if (this.searchBy === 'descricao') {
      obs$ = this.insSvc.buscarPorNomeCot(this.query, this.tipo);
    } else {
      return;
    }

    obs$.subscribe({
      next: data => {
        this.processarResultado(data);
      },
      error: err => {
        this.resultados = [];
      }
    });
  }
  private processarResultado(data: any[]) {
    this.resultados = data;
    console.log(this.resultados);
  }
}
