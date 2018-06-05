import { CorporateUserModule } from './corporate-user.module';

describe('CorporateUserModule', () => {
  let corporateUserModule: CorporateUserModule;

  beforeEach(() => {
    corporateUserModule = new CorporateUserModule();
  });

  it('should create an instance', () => {
    expect(corporateUserModule).toBeTruthy();
  });
});
