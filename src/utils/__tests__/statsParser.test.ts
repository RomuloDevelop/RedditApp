import {addNumberSuffix, THOUSANDS, MILLIONS} from '../statsParser';

describe('statsParser', () => {
  it('should be nomber', () => {
    expect(typeof THOUSANDS).toBe('number');
    expect(typeof MILLIONS).toBe('number');
  });

  it('should return number without suffix', () => {
    expect(addNumberSuffix(10)).toBe(10);
  });

  it('should return number with thousand suffix', () => {
    expect(addNumberSuffix(5900)).toBe('5.9K');
  });

  it('should return number with millions suffix', () => {
    expect(addNumberSuffix(3800000)).toBe('3.8M');
  });
});
