import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {IPost} from 'types';
import {Stats} from '../molecules/Stats';
import {Separator} from '../atoms/Separator';
import {Author} from '../molecules/Author';
import {Content} from '../molecules/Content';

type Props = {
  post: IPost;
  onPress: (post: IPost) => void;
};

export const Post = ({post, onPress}: Props) => (
  <TouchableOpacity style={styles.container} onPress={() => onPress(post)}>
    <Author {...post} />
    <Content {...post} />
    <Separator />
    <Stats {...post} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 12,
    paddingBottom: 12,
    marginTop: 8,
    backgroundColor: 'white',
  },
});
