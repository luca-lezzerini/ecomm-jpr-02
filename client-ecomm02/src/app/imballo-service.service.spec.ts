import { TestBed } from '@angular/core/testing';

import { ImballoServiceService } from './imballo-service.service';

describe('ImballoServiceService', () => {
  let service: ImballoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImballoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
