import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosTemperaturaComponent } from './datos-temperatura.component';

describe('DatosTemperaturaComponent', () => {
  let component: DatosTemperaturaComponent;
  let fixture: ComponentFixture<DatosTemperaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosTemperaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosTemperaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
