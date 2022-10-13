import React from 'react';
import {FlatList} from 'react-native';
import {POST_CATEGORY} from '../../config';
import {Post} from './Post';
import {usePosts} from '../../hooks/usePosts';

type Props = {
  category: POST_CATEGORY;
};
export const Listing = ({category}: Props) => {
  const {posts} = usePosts(category);
  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.name}
      renderItem={({item}) => <Post post={item} />}
    />
  );
};
