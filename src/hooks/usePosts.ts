/* eslint-disable react-hooks/exhaustive-deps */
import {useCallback, useEffect, useRef, useState} from 'react';
import {ITEMS_PER_PAGE, POSTS_LIMIT, POST_CATEGORY} from 'config/constants';
import {getPosts} from 'services/index';
import {IPagination, IPost} from 'types';

export const usePosts = (category: POST_CATEGORY) => {
  const lastPostName = useRef('');
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(
    async (reset: boolean = true) => {
      try {
        setLoading(true);
        const params: IPagination = {limit: ITEMS_PER_PAGE};
        if (!reset && lastPostName.current) {
          params.after = lastPostName.current;
        }

        const {posts: list, after} = await getPosts(category, params);

        if (after) {
          lastPostName.current = after;
        }

        if (!reset && posts.length) {
          const updatedList = posts.concat(list);
          setPosts(updatedList);
          return;
        }

        setPosts(list);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
    [posts, category],
  );

  useEffect(() => {
    fetchData();
  }, []);

  const addPage = useCallback(async () => {
    if (!loading && posts.length < POSTS_LIMIT) {
      await fetchData(false);
    }
  }, [fetchData, loading, posts]);

  const refreshList = useCallback(async () => {
    if (!loading) {
      await fetchData();
    }
  }, [fetchData, loading]);

  return {
    posts,
    addPage,
    refreshList,
    loading,
  };
};
