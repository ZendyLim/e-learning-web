import { AdminContentModule } from './admin-content.module';

describe('AdminContentModule', () => {
  let adminContentModule: AdminContentModule;

  beforeEach(() => {
    adminContentModule = new AdminContentModule();
  });

  it('should create an instance', () => {
    expect(adminContentModule).toBeTruthy();
  });
});
