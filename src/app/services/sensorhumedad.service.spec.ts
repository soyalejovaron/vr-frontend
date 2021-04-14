import { TestBed } from '@angular/core/testing';

import { SensorhumedadService } from './sensorhumedad.service';

describe('SensorhumedadService', () => {
  let service: SensorhumedadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensorhumedadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
