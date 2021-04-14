import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaHorizontalbarTComponent } from './grafica-horizontalbar-t.component';

describe('GraficaHorizontalbarTComponent', () => {
  let component: GraficaHorizontalbarTComponent;
  let fixture: ComponentFixture<GraficaHorizontalbarTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaHorizontalbarTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaHorizontalbarTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
