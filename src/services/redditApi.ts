import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {POST_CATEGORY} from '../config/constants';
import {IPagination, IPost} from '../types';
import axiosInstance from './interceptor';
dayjs.extend(relativeTime);

type Response = {
  data: {
    data: {
      after: string;
      children: {data: IPost}[];
    };
  };
};
export async function getPosts(category: POST_CATEGORY, params: IPagination) {
  try {
    const listing = await axiosInstance.get<IPagination, Response>(
      `/${category}.json`,
      {
        params,
      },
    );

    const {children, after} = listing.data.data;

    const posts = children.map((item, pageIndex) => ({
      ...item.data,
      thumbnail:
        (item.data.thumbnail as string).search(/^(https|http)/) === 0
          ? item.data.thumbnail
          : null,
      pageIndex,
      created: dayjs.unix(item.data.created as number).fromNow(),
    }));

    return {posts, after};
  } catch (err) {
    console.error(err);
    return {posts: [], after: ''};
  }
}
