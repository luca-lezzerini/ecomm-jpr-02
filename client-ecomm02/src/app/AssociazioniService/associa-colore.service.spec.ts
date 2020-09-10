import { TestBed } from '@angular/core/testing';

import { AssociaColoreService } from './associa-colore.service';

describe('AssociaColoreService', () => {
  let service: AssociaColoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssociaColoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
