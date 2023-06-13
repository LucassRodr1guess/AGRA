import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroDadosPage } from './cadastro-dados.page';

describe('CadastroDadosPage', () => {
  let component: CadastroDadosPage;
  let fixture: ComponentFixture<CadastroDadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroDadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
