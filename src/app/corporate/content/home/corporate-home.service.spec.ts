import { TestBed, inject } from '@angular/core/testing';

import { CorporateHomeService } from './corporate-home.service';

describe('CorporateHomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CorporateHomeService]
    });
  });

  it('should be created', inject([CorporateHomeService], (service: CorporateHomeService) => {
    expect(service).toBeTruthy();
  }));
});
