import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoGraficaTemperaturaComponent } from './tipo-grafica-temperatura.component';

describe('TipoGraficaTemperaturaComponent', () => {
  let component: TipoGraficaTemperaturaComponent;
  let fixture: ComponentFixture<TipoGraficaTemperaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoGraficaTemperaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoGraficaTemperaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
