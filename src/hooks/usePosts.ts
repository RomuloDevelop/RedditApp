import {useCallback, useEffect, useState} from 'react';
import {POST_CATEGORY} from '../config/constants';
import {getPosts} from '../services/index';
import {IPagination, IPost} from '../types';

const PAGE_LIMIT = 8;

export const usePosts = (category: POST_CATEGORY) => {
  const [lastPostName, setLastPostName] = useState('');
  const [posts, setPosts] = useState<IPost[]>([]);

  const fetchData = useCallback(async () => {
    const params: IPagination = {limit: PAGE_LIMIT};
    if (lastPostName) {
      params.after = lastPostName;
    }

    const result = await getPosts(category, params);
    if (lastPostName) {
      setPosts(posts.concat(result));
      return;
    }
    setPosts(result);
  }, [lastPostName, category]);

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
