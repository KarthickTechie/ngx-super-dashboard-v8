import { TestBed } from '@angular/core/testing';

import { NgxSuperDashboardService } from './ngx-super-dashboard.service';

describe('NgxSuperDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxSuperDashboardService = TestBed.get(NgxSuperDashboardService);
    expect(service).toBeTruthy();
  });
});
