import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {POST_CATEGORY} from '../config/constants';
import {IPagination, IPost} from '../types';
import axiosInstance from './interceptor';
dayjs.extend(relativeTime);

type Response = {
  data: {data: {children: {data: IPost}[]}};
};
export async function getPosts(category: POST_CATEGORY, params: IPagination) {
  try {
    const listing = await axiosInstance.get<IPagination, Response>(
      `/${category}.json`,
      {
        params,
      },
    );
    return listing.data.data.children.map(item => ({
      ...item.data,
      created: dayjs.unix(item.data.created).fromNow(),
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
}
