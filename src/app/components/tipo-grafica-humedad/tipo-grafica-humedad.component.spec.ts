import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoGraficaHumedadComponent } from './tipo-grafica-humedad.component';

describe('TipoGraficaHumedadComponent', () => {
  let component: TipoGraficaHumedadComponent;
  let fixture: ComponentFixture<TipoGraficaHumedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoGraficaHumedadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoGraficaHumedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
