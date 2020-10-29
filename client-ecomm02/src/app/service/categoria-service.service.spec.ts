import { TestBed } from '@angular/core/testing';

import { CategoriaServiceService } from './categoria-service.service';

describe('CategoriaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriaServiceService = TestBed.get(CategoriaServiceService);
    expect(service).toBeTruthy();
  });
});
