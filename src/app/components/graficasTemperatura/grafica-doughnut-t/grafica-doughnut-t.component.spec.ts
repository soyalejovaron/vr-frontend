import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaDoughnutTComponent } from './grafica-doughnut-t.component';

describe('GraficaDoughnutTComponent', () => {
  let component: GraficaDoughnutTComponent;
  let fixture: ComponentFixture<GraficaDoughnutTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaDoughnutTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaDoughnutTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
