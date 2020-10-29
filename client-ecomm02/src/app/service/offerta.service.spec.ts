import { TestBed } from '@angular/core/testing';

import { OffertaService } from './offerta.service';

describe('OffertaService', () => {
  let service: OffertaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffertaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
