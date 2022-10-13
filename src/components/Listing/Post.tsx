import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IPost} from '../../types';

type Props = {
  post: IPost;
};

export const Post = ({post}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.author}>{post.author}</Text>
      <Text style={styles.title}>{post.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  author: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
  },
  authorImage: {},
  thumbnailImage: {},
});
