import {PURPLE, FONT_COLOR, GREY} from '../colors';

describe('colors', () => {
  it('should have correct data type', () => {
    expect(typeof PURPLE).toBe('string');
    expect(typeof FONT_COLOR).toBe('string');
    expect(typeof GREY).toBe('string');
  });
});
