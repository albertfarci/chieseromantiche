import { TestBed } from '@angular/core/testing';

import { ChieseRomaneService } from './chiese-romane.service';

describe('ChieseRomaneService', () => {
  let service: ChieseRomaneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChieseRomaneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
