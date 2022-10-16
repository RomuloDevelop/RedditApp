import {Platform} from 'react-native';

export const BASE_URL = 'https://api.reddit.com/r/pics';

export enum POST_CATEGORY {
  CONTROVERSIAL = 'controversial',
  HOT = 'hot',
  NEW = 'new',
  TOP = 'top',
}

export const ITEMS_PER_PAGE = 8;
export const PAGES_LIMIT = 10;
export const POSTS_LIMIT = ITEMS_PER_PAGE * PAGES_LIMIT;
export const HEADER_PADDING_TOP = Platform.OS === 'android' ? 30 : 0;
