import {POST_CATEGORY} from '../config';
import {IPagination, IPost} from '../types';
import axios from './interceptor';

export const getPosts = async (
  category: POST_CATEGORY,
  params: IPagination,
) => {
  try {
    const listing = await axios.get<IPagination, {children: IPost[]}>(
      `/${category}.json`,
      {
        params,
      },
    );
    return listing.children;
  } catch (err) {
    console.error(err);
    return [];
  }
};
