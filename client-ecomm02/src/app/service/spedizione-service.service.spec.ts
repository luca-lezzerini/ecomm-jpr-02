import { TestBed } from '@angular/core/testing';

import { SpedizioneServiceService } from './spedizione-service.service';

describe('SpedizioneServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpedizioneServiceService = TestBed.get(SpedizioneServiceService);
    expect(service).toBeTruthy();
  });
});
