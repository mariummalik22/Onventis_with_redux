import { FlavorSizePipe } from './flavors.pipe';

describe('FlavorSizePipe', () => {
  let pipe: FlavorSizePipe;

  beforeEach(() => {
    pipe = pipe = new FlavorSizePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('size selection', () => {
    it('512 => 512 MB', () => {
      expect(pipe.transform(512,'MB')).toBe('512 MB');
    });

    it('1024 => 1 GB', () => {
      expect(pipe.transform(1024,'MB')).toBe('1 GB');
    });

    it('4096 => 4 GB', () => {
      expect(pipe.transform(4096,'MB')).toBe('4 GB');
    });

    it('8192 => 8 GB', () => {
      expect(pipe.transform(8192,'MB')).toBe('8 GB');
    });

    it('16384 => 16 GB', () => {
      expect(pipe.transform(16384,'MB')).toBe('16 GB');
    });

    it('32768 => 32 GB', () => {
      expect(pipe.transform(32768,'MB')).toBe('32 GB');
    });

    it('65536 => 64 GB', () => {
      expect(pipe.transform(65536,'MB')).toBe('64 GB');
    });

    it('1048576 => 1 TB', () => {
      expect(pipe.transform(1048576,'MB')).toBe('1 TB');
    });

    it('1073741824 => 1 PB', () => {
      expect(pipe.transform(1073741824,'MB')).toBe('1 PB');
    });
  });
});
