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
  anoProposta: number | null = null;
  numeroMeta: string = '';
  numeroSubmeta: string = '';
  nome = '';
  encargos = '';
  bdi = '';
  nomeBanco = '';
  periodoBanco = '';
  bancos: { nome: string; periodo: string }[] = [];
  modalBancoAberto = false;
isOrcamento: boolean= false;
  menuAberto: boolean = false;
  menuEventogramaAberto: boolean = false;


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

  abrirMenu(): void {
    this.menuAberto = true;
  }


  fecharMenu(): void {
    this.menuAberto = false;
  }


  importarOrcamento(): void {
    console.log('Importando orçamento...');

    this.fecharMenu();
  }

  exportarParaTransfereGov() {
    if (!this.anoProposta || !this.numeroMeta || !this.numeroSubmeta) {
      alert('Por favor, preencha todos os campos antes de exportar.');
      return;
    }

    console.log('Exportando com os dados:', {
      anoProposta: this.anoProposta,
      numeroMeta: this.numeroMeta,
      numeroSubmeta: this.numeroSubmeta
    });

}

  abrirModal(): void {
    this.modalAberto = true;
    this.fecharMenu();
  }

  fecharModal(): void {
    this.modalAberto = false;
  }

  confirmarExportacao(): void {
    console.log('Exportação confirmada!');
    this.fecharModal();
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
