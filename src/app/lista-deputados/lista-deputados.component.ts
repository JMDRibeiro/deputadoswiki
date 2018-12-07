import { Component, OnInit } from '@angular/core';
import { DBService } from '../servicos/db.service';
import { Deputado } from 'src/entidades/deputado';

@Component({
  selector: 'app-lista-deputados',
  templateUrl: './lista-deputados.component.html',
  styleUrls: ['./lista-deputados.component.css'],
  providers: [DBService]

})
export class ListaDeputadosComponent implements OnInit {
  deputados: Deputado[];
  carregando: boolean;
  constructor(private database: DBService) {
    this.carregarDeputados();
   }

  ngOnInit() {
  }

  private carregarDeputados() {
    this.carregando = true;

    this.database.listar<Deputado>('Deputado')
      .then(DeputadoDB => {
        this.deputados = DeputadoDB;

        this.carregando = false;
      });
  }

  remover(uid: string) {
    this.database.remover('Deputado', uid)
      .then(() => {
        alert('deputado removido com sucesso');

        this.carregarDeputados();
      });
  }

  editar(deputado) {
    deputado.editando = true;
  }

  cancelEdit(deputado) {
    deputado.editando = false;
  }

  confirmEdit(deputado) {
    this.database.atualizar('Deputado', deputado.uid, { nome: deputado.nome, sigla: deputado.sigla, estado: deputado.estado, bandeira: deputado.bandeira})
      .then(() => {
        alert('deputado atualizado com sucesso');
        this.carregarDeputados();
      });
  }
}