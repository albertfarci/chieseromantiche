import { TestBed } from '@angular/core/testing';

import { DashboardTemplateService } from './dashboard-template.service';

describe('DashboardTemplateService', () => {
  let service: DashboardTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
