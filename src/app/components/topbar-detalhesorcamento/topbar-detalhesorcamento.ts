import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Detalhesorcamento} from '../pages/detalhesorcamento/detalhesorcamento';


@Component({
  standalone: true,
  imports: [CommonModule,
    RouterLink, FormsModule],

  selector: 'app-topbar-detalhesorcamento',
  templateUrl: './topbar-detalhesorcamento.html',
  styleUrl: './topbar-detalhesorcamento.css'
})

export class TopbarDetalhesorcamento implements OnInit{
orcamentoId!: string;
modalAberto = false;
  nome = '';
  encargos = '';
  bdi = '';
  nomeBanco = '';
  periodoBanco = '';
  bancos: { nome: string; periodo: string }[] = [];
  modalBancoAberto = false;
isOrcamento: boolean= false;


constructor(private route: ActivatedRoute, private router: Router) {
}

ngOnInit() {
  this.route.paramMap.subscribe(params =>{
    this.orcamentoId = params.get('id')!;

  });
  const url =this.router.url;
  if (url.startsWith('/eventograma')){
    this.isOrcamento= true;
  }

}

  abrirModal() {
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
  }

  abrirModalBanco() {
    this.modalBancoAberto = true;
  }

  fecharModalBanco() {
    this.modalBancoAberto = false;
  }

  adicionarBanco() {
    if (this.nomeBanco && this.periodoBanco) {
      this.bancos.push({
        nome: this.nomeBanco,
        periodo: this.periodoBanco
      });
      this.nomeBanco = '';
      this.periodoBanco = '';
    }
  }

  removerBanco(index: number) {
    this.bancos.splice(index, 1);
  }

  salvar() {
    console.log('Salvando dados:', {
      nome: this.nome,
      encargos: this.encargos,
      bdi: this.bdi,
      bancos: this.bancos
    });
    this.fecharModalBanco();
  }
}
