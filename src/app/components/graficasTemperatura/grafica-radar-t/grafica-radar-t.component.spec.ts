import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaRadarTComponent } from './grafica-radar-t.component';

describe('GraficaRadarTComponent', () => {
  let component: GraficaRadarTComponent;
  let fixture: ComponentFixture<GraficaRadarTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaRadarTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaRadarTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
