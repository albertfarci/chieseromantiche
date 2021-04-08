import { TestBed } from '@angular/core/testing';

import { HomeTemplateSettingsService } from './home-template-settings.service';

describe('HomeTemplateSettingsService', () => {
  let service: HomeTemplateSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeTemplateSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
