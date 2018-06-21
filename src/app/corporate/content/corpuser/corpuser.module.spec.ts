import { CorpuserModule } from './Corpuser.module';

describe('CorpuserModule', () => {
  let CorpuserModule: CorpuserModule;

  beforeEach(() => {
    CorpuserModule = new CorpuserModule();
  });

  it('should create an instance', () => {
    expect(CorpuserModule).toBeTruthy();
  });
});
