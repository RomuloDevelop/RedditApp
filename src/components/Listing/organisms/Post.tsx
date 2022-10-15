import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Animated, {FadeInRight} from 'react-native-reanimated';
import {IPost} from 'types';
import {Stats} from '../molecules/Stats';
import {Separator} from '../atoms/Separator';
import {Author} from '../molecules/Author';
import {Content} from '../molecules/Content';
import {ANIMATION_DURATION} from '../config';

type Props = {
  post: IPost;
  onPress: (post: IPost) => void;
  animate: boolean;
  delay: number;
};

export const Post = ({post, onPress, animate, delay}: Props) => (
  <Animated.View
    entering={
      animate
        ? FadeInRight.duration(ANIMATION_DURATION).delay(delay)
        : undefined
    }>
    <TouchableOpacity style={styles.container} onPress={() => onPress(post)}>
      <Author {...post} />
      <Content {...post} />
      <Separator />
      <Stats {...post} />
    </TouchableOpacity>
  </Animated.View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 12,
    paddingBottom: 12,
    marginBottom: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,

    elevation: 3,
  },
});
