import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeputadosComponent } from './lista-deputados.component';

describe('ListaDeputadosComponent', () => {
  let component: ListaDeputadosComponent;
  let fixture: ComponentFixture<ListaDeputadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeputadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeputadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
