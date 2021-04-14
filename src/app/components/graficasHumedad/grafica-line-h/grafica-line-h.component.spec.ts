import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaLineHComponent } from './grafica-line-h.component';

describe('GraficaLineHComponent', () => {
  let component: GraficaLineHComponent;
  let fixture: ComponentFixture<GraficaLineHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaLineHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaLineHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
