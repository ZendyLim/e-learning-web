import { AdminUserAddModule } from './admin-user-add.module';

describe('AdminUserAddModule', () => {
  let adminUserAddModule: AdminUserAddModule;

  beforeEach(() => {
    adminUserAddModule = new AdminUserAddModule();
  });

  it('should create an instance', () => {
    expect(adminUserAddModule).toBeTruthy();
  });
});
