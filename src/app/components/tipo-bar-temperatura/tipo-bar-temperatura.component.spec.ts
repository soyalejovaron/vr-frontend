import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoBarTemperaturaComponent } from './tipo-bar-temperatura.component';

describe('TipoBarTemperaturaComponent', () => {
  let component: TipoBarTemperaturaComponent;
  let fixture: ComponentFixture<TipoBarTemperaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoBarTemperaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoBarTemperaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
