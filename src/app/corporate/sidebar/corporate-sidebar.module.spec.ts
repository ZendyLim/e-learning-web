import { CorporateSidebarModule } from './corporate-sidebar.module';

describe('CorporateSidebarModule', () => {
  let corporateSidebarModule: CorporateSidebarModule;

  beforeEach(() => {
    corporateSidebarModule = new CorporateSidebarModule();
  });

  it('should create an instance', () => {
    expect(corporateSidebarModule).toBeTruthy();
  });
});
