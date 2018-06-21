import { AdminStudentModule } from './admin-student.module';

describe('AdminStudentModule', () => {
  let adminStudentModule: AdminStudentModule;

  beforeEach(() => {
    adminStudentModule = new AdminStudentModule();
  });

  it('should create an instance', () => {
    expect(adminStudentModule).toBeTruthy();
  });
});
