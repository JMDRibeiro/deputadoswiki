import { Component, OnInit } from '@angular/core';
import { DBService } from '../servicos/db.service';
import { Route, Router } from '@angular/router';
import { Partido } from 'src/entidades/partido';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styleUrls: ['./partido.component.css'],
  providers: [DBService]
})
export class PartidoComponent implements OnInit { 
  novoPartido: Partido;
  carregando: boolean;
  constructor(private database: DBService, private router: Router) {
    this.novoPartido = new Partido();
  }

  ngOnInit() {
  }

  cadastrar() {
    this.database.inserir('Partido', this.novoPartido)
      .then(() => {
        alert('partido cadastrado com sucesso');
        this.router.navigate(["lista-partidos"]);
        this.novoPartido = new Partido();
      });
  }
}