import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routing} from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabase } from '@angular/fire/database';
import { DBService } from './servicos/db.service';
import { DeputadoComponent } from 'src/app/deputado/deputado.component';
import { ListaDeputadosComponent } from 'src/app/lista-deputados/lista-deputados.component';
import { PartidoComponent } from 'src/app/partido/partido.component';
import { ListaPartidosComponent } from 'src/app/lista-partidos/lista-partidos.component';


@NgModule({
  declarations: [
    AppComponent,
    DeputadoComponent,
    ListaDeputadosComponent,
    PartidoComponent,
    ListaPartidosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      { path: 'deputado', component: DeputadoComponent },
      { path: 'listaDeputados', component: ListaDeputadosComponent },
      { path: 'partido', component: PartidoComponent },
      { path: 'listaPartidos', component: ListaPartidosComponent },

    ])
  ],
  providers: [AngularFireDatabase,DBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
