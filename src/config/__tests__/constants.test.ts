import {BASE_URL, ITEMS_PER_PAGE, PAGES_LIMIT, POSTS_LIMIT} from '../constants';

describe('constants', () => {
  it('should have correct data type', () => {
    expect(typeof BASE_URL).toBe('string');
    expect(typeof ITEMS_PER_PAGE).toBe('number');
    expect(typeof PAGES_LIMIT).toBe('number');
    expect(typeof POSTS_LIMIT).toBe('number');
  });
});
