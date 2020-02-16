import { TestBed } from '@angular/core/testing';

import { CookiesPolicyService } from './cookies-policy.service';

describe('CookiesPolicyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CookiesPolicyService = TestBed.get(CookiesPolicyService);
    expect(service).toBeTruthy();
  });
});
