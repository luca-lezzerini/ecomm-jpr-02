import { TestBed } from '@angular/core/testing';

import { ColoreService } from './colore.service';

describe('ColoreService', () => {
  let service: ColoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
