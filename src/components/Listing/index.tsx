import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {POST_CATEGORY} from '../../config/constants';
import {Post} from './organisms/Post';
import {usePosts} from '../../hooks/usePosts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {POST} from 'navigation/routes';
import {IPost} from 'types';

type Props = {
  category: POST_CATEGORY;
};
export const Listing = ({category}: Props) => {
  const navigation = useNavigation();
  const {bottom} = useSafeAreaInsets();
  const {posts} = usePosts(category);
  const toWebView = useCallback(
    ({permalink, title, created}: IPost) => {
      console.log('created_at', created);
      navigation.navigate(POST, {permalink, title});
    },
    [navigation],
  );

  return (
    <FlatList
      data={posts}
      contentContainerStyle={{paddingBottom: bottom}}
      keyExtractor={item => item.name}
      renderItem={({item}) => <Post post={item} onPress={toWebView} />}
    />
  );
};
