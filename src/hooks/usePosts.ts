import {useCallback, useEffect, useState} from 'react';
import {POST_CATEGORY} from '../config';
import {getPosts} from '../services';
import {IPagination, IPost} from '../types';

const PAGE_LIMIT = 8;

export const usePosts = (category: POST_CATEGORY) => {
  const [lastPostName, setLastPostName] = useState('');
  const [posts, setPosts] = useState<IPost[]>([]);

  const fetchData = useCallback(async () => {
    const params: IPagination = lastPostName
      ? {after: lastPostName, limit: PAGE_LIMIT}
      : {limit: PAGE_LIMIT};

    const result = await getPosts(category, params);
    if (lastPostName) {
      setPosts(posts.concat(result));
      return;
    }
    setPosts(result);
  }, [posts, lastPostName, category]);

  useEffect(() => {
    fetchData().then();
  }, [fetchData, lastPostName]);

  const addPage = useCallback(() => {
    setLastPostName(posts[posts.length - 1].name);
  }, [posts]);

  const refreshList = useCallback(() => {
    setLastPostName('');
  }, []);

  return {
    posts,
    addPage,
    refreshList,
  };
};
