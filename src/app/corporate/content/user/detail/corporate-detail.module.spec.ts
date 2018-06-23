import { CorporateDetailModule } from './corporate-detail.module';

describe('CorporateDetailModule', () => {
  let corporateDetailModule: CorporateDetailModule;

  beforeEach(() => {
    corporateDetailModule = new CorporateDetailModule();
  });

  it('should create an instance', () => {
    expect(corporateDetailModule).toBeTruthy();
  });
});
