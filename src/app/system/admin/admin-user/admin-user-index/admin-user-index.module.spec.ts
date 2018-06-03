import { AdminUserIndexModule } from './admin-user-index.module';

describe('AdminUserIndexModule', () => {
  let adminUserIndexModule: AdminUserIndexModule;

  beforeEach(() => {
    adminUserIndexModule = new AdminUserIndexModule();
  });

  it('should create an instance', () => {
    expect(adminUserIndexModule).toBeTruthy();
  });
});
