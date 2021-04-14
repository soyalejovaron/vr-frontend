import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaBarTComponent } from './grafica-bar-t.component';

describe('GraficaBarTComponent', () => {
  let component: GraficaBarTComponent;
  let fixture: ComponentFixture<GraficaBarTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaBarTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaBarTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
