import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DeputadoComponent } from 'src/app/deputado/deputado.component';
import {ListaDeputadosComponent } from 'src/app/lista-deputados/lista-deputados.component';
import {PartidoComponent } from 'src/app/partido/partido.component';
import { ListaPartidosComponent } from 'src/app/lista-partidos/lista-partidos.component';

const APP_ROUTES: Routes =[
    {path : 'deputado', component:DeputadoComponent},
    {path : 'lista-deputados', component:ListaDeputadosComponent},
    {path : 'partido', component:PartidoComponent},
    {path : 'lista-partidos', component:ListaPartidosComponent}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);