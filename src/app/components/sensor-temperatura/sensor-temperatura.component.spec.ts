import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorTemperaturaComponent } from './sensor-temperatura.component';

describe('SensorTemperaturaComponent', () => {
  let component: SensorTemperaturaComponent;
  let fixture: ComponentFixture<SensorTemperaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorTemperaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorTemperaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
