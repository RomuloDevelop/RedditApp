import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {POST_CATEGORY} from '../config/constants';
import {IPagination, TRedditResponse} from '../types';
import axiosInstance from './interceptor';
dayjs.extend(relativeTime);

export async function getPosts(category: POST_CATEGORY, params: IPagination) {
  try {
    const listing = await axiosInstance.get<
      IPagination,
      {data: TRedditResponse}
    >(`/${category}.json`, {
      params,
    });

    const {children, after} = listing.data.data;

    const posts = children.map(item => ({
      ...item.data,
      thumbnail:
        (item.data.thumbnail as string).search(/^(https|http)/) === 0
          ? item.data.thumbnail
          : null,
      created: dayjs.unix(item.data.created as number).fromNow(),
    }));

    return {posts, after};
  } catch (err) {
    console.error(err);
    return {posts: [], after: ''};
  }
}
