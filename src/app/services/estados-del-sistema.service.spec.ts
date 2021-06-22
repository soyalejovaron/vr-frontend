import { TestBed } from '@angular/core/testing';

import { EstadosDelSistemaService } from './estados-del-sistema.service';

describe('EstadosDelSistemaService', () => {
  let service: EstadosDelSistemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadosDelSistemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
