import { TestBed } from '@angular/core/testing';

import { AutoInfoService } from './auto-info.service';

describe('AutoInfoService', () => {
  let service: AutoInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
