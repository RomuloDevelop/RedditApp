import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {ITEMS_PER_PAGE, POST_CATEGORY} from '../../config/constants';
import {Post} from './organisms/Post';
import {usePosts} from '../../hooks/usePosts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {POST} from 'navigation/routes';
import {IPost} from 'types';
import {ANIMATION_DELAY} from './config';
import {Loader} from 'components/Loader';

type Props = {
  category: POST_CATEGORY;
};
export const Listing = ({category}: Props) => {
  const navigation = useNavigation();
  const {bottom} = useSafeAreaInsets();
  const [isRefreshing, setRefresh] = useState(false);
  const {posts, refreshList, addPage, loading} = usePosts(category);
  const onRefresh = useCallback(async () => {
    setRefresh(true);
    await refreshList();
    setRefresh(false);
  }, [refreshList]);

  const toWebView = useCallback(
    ({permalink, title}: IPost) => {
      navigation.navigate(POST, {permalink, title});
    },
    [navigation],
  );

  const onEndReach = useCallback(() => {
    addPage();
  }, [addPage]);

  if (loading && !posts.length) {
    return <Loader />;
  }

  return (
    <FlatList
      data={posts}
      contentContainerStyle={[styles.container, {paddingBottom: bottom}]}
      keyExtractor={(item, index) => item.name + index}
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.2}
      renderItem={({item, index}) => {
        const animate = posts.length <= ITEMS_PER_PAGE + 1;
        const delay = animate ? index * ANIMATION_DELAY : 0;
        return (
          <Post
            post={item}
            onPress={toWebView}
            delay={delay}
            animate={animate}
          />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
});
