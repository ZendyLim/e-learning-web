import { TestBed, inject } from '@angular/core/testing';

import { AdminAnalyticService } from './admin-analytic.service';

describe('AdminAnalyticService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAnalyticService]
    });
  });

  it('should be created', inject([AdminAnalyticService], (service: AdminAnalyticService) => {
    expect(service).toBeTruthy();
  }));
});
