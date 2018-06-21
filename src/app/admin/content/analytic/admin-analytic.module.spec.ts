import { AdminAnalyticModule } from './admin-analytic.module';

describe('AdminAnalyticModule', () => {
  let adminAnalyticModule: AdminAnalyticModule;

  beforeEach(() => {
    adminAnalyticModule = new AdminAnalyticModule();
  });

  it('should create an instance', () => {
    expect(adminAnalyticModule).toBeTruthy();
  });
});
