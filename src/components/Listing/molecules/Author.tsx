import {FONT_COLOR, GREY} from 'config/colors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IPost} from 'types';

export const Author = ({author, created}: IPost) => (
  <View style={styles.authorContainer}>
    <Text style={styles.author}>{author}</Text>
    <View style={styles.dot} />
    <Text style={styles.time}>{created}</Text>
  </View>
);

const styles = StyleSheet.create({
  authorContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 12,
  },
  author: {
    fontSize: 15,
    fontWeight: 'bold',
    color: FONT_COLOR,
  },
  dot: {
    width: 4,
    aspectRatio: 1 / 1,
    borderRadius: 2,
    backgroundColor: 'black',
    opacity: 0.3,
    marginHorizontal: 5,
  },
  time: {
    color: GREY,
    fontSize: 13,
    lineHeight: 0,
  },
});
