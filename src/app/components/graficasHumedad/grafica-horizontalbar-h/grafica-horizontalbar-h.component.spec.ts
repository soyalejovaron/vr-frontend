import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaHorizontalbarHComponent } from './grafica-horizontalbar-h.component';

describe('GraficaHorizontalbarHComponent', () => {
  let component: GraficaHorizontalbarHComponent;
  let fixture: ComponentFixture<GraficaHorizontalbarHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaHorizontalbarHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaHorizontalbarHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
