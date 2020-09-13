import { TestBed } from '@angular/core/testing';

import { SrvAssociaSpedizioneService } from './srv-associa-spedizione.service';

describe('SrvAssociaSpedizioneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SrvAssociaSpedizioneService = TestBed.get(SrvAssociaSpedizioneService);
    expect(service).toBeTruthy();
  });
});
