import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeTemperaturaComponent } from './real-time-temperatura.component';

describe('RealTimeTemperaturaComponent', () => {
  let component: RealTimeTemperaturaComponent;
  let fixture: ComponentFixture<RealTimeTemperaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealTimeTemperaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealTimeTemperaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
