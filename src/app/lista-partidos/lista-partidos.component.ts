import { Component, OnInit } from '@angular/core';
import { DBService } from '../servicos/db.service';
import { Partido } from 'src/entidades/partido';

@Component({
  selector: 'app-lista-partidos',
  templateUrl: './lista-partidos.component.html',
  styleUrls: ['./lista-partidos.component.css'],
  providers: [DBService]

})
export class ListaPartidosComponent implements OnInit {
  partidos: Partido[];
  carregando: boolean;
  constructor(private database: DBService) {
    this.carregarPartidos();
   }

  ngOnInit() {
  }

  private carregarPartidos() {
    this.carregando = true;

    this.database.listar<Partido>('Partido')
      .then(UniformeDB => {
        this.partidos = UniformeDB;

        this.carregando = false;
      });
  }

  remover(uid: string) {
    this.database.remover('Partido', uid)
      .then(() => {
        alert('partido removido com sucesso');

        this.carregarPartidos();
      });
  }

  editar(partido) {
    partido.editando = true;
  }

  cancelEdit(partido) {
    partido.editando = false;
  }

  confirmEdit(partido) {
    this.database.atualizar('Partido', partido.uid, { nome: partido.nome, numero:partido.numero, sigla:partido.sigla})
      .then(() => {
        alert('partido atualizado com sucesso');
        this.carregarPartidos();
      });
  }
}