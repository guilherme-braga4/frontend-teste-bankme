import { TestBed } from '@angular/core/testing';

import { AuthService, ApiService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let serviceAPI: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
    serviceAPI = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(serviceAPI).toBeTruthy();
  });
});
