import { TestBed } from '@angular/core/testing';

import { ColoriService } from './colori.service';

describe('ColoriService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColoriService = TestBed.get(ColoriService);
    expect(service).toBeTruthy();
  });
});
