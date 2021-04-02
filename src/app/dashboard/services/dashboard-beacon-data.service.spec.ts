import { TestBed } from '@angular/core/testing';

import { DashboardBeaconDataService } from './dashboard-beacon-data.service';

describe('DashboardBeaconDataService', () => {
  let service: DashboardBeaconDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardBeaconDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
