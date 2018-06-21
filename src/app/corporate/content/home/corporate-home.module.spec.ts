import { CorporateHomeModule } from './corporate-home.module';

describe('CorporateHomeModule', () => {
  let corporateHomeModule: CorporateHomeModule;

  beforeEach(() => {
    corporateHomeModule = new CorporateHomeModule();
  });

  it('should create an instance', () => {
    expect(corporateHomeModule).toBeTruthy();
  });
});
