import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaBarHComponent } from './grafica-bar-h.component';

describe('GraficaBarHComponent', () => {
  let component: GraficaBarHComponent;
  let fixture: ComponentFixture<GraficaBarHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaBarHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaBarHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
