import { Component, OnInit, ElementRef } from '@angular/core';
import { DBService } from '../servicos/db.service';
import { Deputado } from 'src/entidades/deputado';
import { Route, Router } from '@angular/router';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-deputado',
  templateUrl: './deputado.component.html',
  styleUrls: ['./deputado.component.css'],
  providers: [DBService]
})
export class DeputadoComponent implements OnInit {
  novoDeputado: Deputado;
  carregando: boolean;
  constructor(private database: DBService, private router: Router, @Inject(ElementRef) elementRef: ElementRef) {
    this.novoDeputado = new Deputado();
  }

  ngOnInit() {
    
  }

  cadastrar() {
    this.database.inserir('Deputado', this.novoDeputado)
      .then(() => {
        alert('deputado cadastrado com sucesso');
        this.router.navigate(["lista-deputados"]);
        this.novoDeputado = new Deputado();
      });
  }
}