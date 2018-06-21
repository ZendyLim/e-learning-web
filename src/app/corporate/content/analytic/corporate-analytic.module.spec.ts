import { CorporateAnalyticModule } from './corporate-Analytic.module';

describe('CorporateAnalyticModule', () => {
  let corporateAnalyticModule: CorporateAnalyticModule;

  beforeEach(() => {
    corporateAnalyticModule = new CorporateAnalyticModule();
  });

  it('should create an instance', () => {
    expect(corporateAnalyticModule).toBeTruthy();
  });
});
