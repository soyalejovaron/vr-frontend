import { TestBed } from '@angular/core/testing';

import { SensorLluviaService } from './sensor-lluvia.service';

describe('SensorLluviaService', () => {
  let service: SensorLluviaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensorLluviaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
