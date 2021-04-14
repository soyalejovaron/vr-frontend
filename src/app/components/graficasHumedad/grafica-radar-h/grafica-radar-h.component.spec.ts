import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaRadarHComponent } from './grafica-radar-h.component';

describe('GraficaRadarHComponent', () => {
  let component: GraficaRadarHComponent;
  let fixture: ComponentFixture<GraficaRadarHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaRadarHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaRadarHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
