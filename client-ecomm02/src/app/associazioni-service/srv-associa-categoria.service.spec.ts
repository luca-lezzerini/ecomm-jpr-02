import { TestBed } from '@angular/core/testing';

import { SrvAssociaCategoriaService } from './srv-associa-categoria.service';

describe('SrvAssociaCategoriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SrvAssociaCategoriaService = TestBed.get(SrvAssociaCategoriaService);
    expect(service).toBeTruthy();
  });
});
