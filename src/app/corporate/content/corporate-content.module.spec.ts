import { CorporateContentModule } from './corporate-content.module';

describe('CorporateContentModule', () => {
  let corporateContentModule: CorporateContentModule;

  beforeEach(() => {
    corporateContentModule = new CorporateContentModule();
  });

  it('should create an instance', () => {
    expect(corporateContentModule).toBeTruthy();
  });
});
