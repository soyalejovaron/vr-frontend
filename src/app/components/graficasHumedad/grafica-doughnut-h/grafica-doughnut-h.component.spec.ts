import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaDoughnutHComponent } from './grafica-doughnut-h.component';

describe('GraficaDoughnutHComponent', () => {
  let component: GraficaDoughnutHComponent;
  let fixture: ComponentFixture<GraficaDoughnutHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaDoughnutHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaDoughnutHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
