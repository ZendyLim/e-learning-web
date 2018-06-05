import { TestBed, inject } from '@angular/core/testing';

import { CorporateUserService } from './corporate-user.service';

describe('CorporateUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CorporateUserService]
    });
  });

  it('should be created', inject([CorporateUserService], (service: CorporateUserService) => {
    expect(service).toBeTruthy();
  }));
});
