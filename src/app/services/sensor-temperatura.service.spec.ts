import { TestBed } from '@angular/core/testing';

import { SensorTemperaturaService } from './sensor-temperatura.service';

describe('SensorTemperaturaService', () => {
  let service: SensorTemperaturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensorTemperaturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
