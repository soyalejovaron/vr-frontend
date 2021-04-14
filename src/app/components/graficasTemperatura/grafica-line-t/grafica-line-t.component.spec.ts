import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaLineTComponent } from './grafica-line-t.component';

describe('GraficaLineTComponent', () => {
  let component: GraficaLineTComponent;
  let fixture: ComponentFixture<GraficaLineTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaLineTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaLineTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
