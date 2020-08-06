import { TestBed } from '@angular/core/testing';

import { TagliaServiceService } from './taglia-service.service';

describe('TagliaServiceService', () => {
  let service: TagliaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagliaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
