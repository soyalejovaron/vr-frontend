import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosHumedadComponent } from './datos-humedad.component';

describe('DatosHumedadComponent', () => {
  let component: DatosHumedadComponent;
  let fixture: ComponentFixture<DatosHumedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosHumedadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosHumedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
