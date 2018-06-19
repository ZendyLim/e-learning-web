import { AdmingabModule } from './admingab.module';

describe('AdmingabModule', () => {
  let admingabModule: AdmingabModule;

  beforeEach(() => {
    admingabModule = new AdmingabModule();
  });

  it('should create an instance', () => {
    expect(admingabModule).toBeTruthy();
  });
});
