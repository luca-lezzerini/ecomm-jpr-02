import { TestBed } from '@angular/core/testing';

import { AssociaOffertaService } from './associa-offerta.service';

describe('AssociaOffertaService', () => {
  let service: AssociaOffertaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssociaOffertaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
