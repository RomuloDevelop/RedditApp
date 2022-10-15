import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {FONT_COLOR} from 'config/colors';
import {IPost} from 'types';

export const Content = ({
  thumbnail,
  thumbnail_height,
  thumbnail_width,
  title,
}: IPost) => (
  <View style={styles.postInfoContainer}>
    {thumbnail && (
      <Image
        source={{uri: thumbnail}}
        style={[
          styles.thumbnailImage,
          thumbnail_width && thumbnail_height
            ? {aspectRatio: thumbnail_width / thumbnail_height}
            : {},
        ]}
      />
    )}
    <Text style={styles.title}>{title}</Text>
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
    width: 3,
    aspectRatio: 1 / 1,
    borderRadius: 1.5,
    backgroundColor: 'black',
    opacity: 0.3,
    marginLeft: 5,
  },
  postInfoContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    textAlign: 'left',
    flexWrap: 'wrap',
    flexShrink: 1,
    color: FONT_COLOR,
  },
  thumbnailImage: {
    borderRadius: 15,
    width: 85,
    aspectRatio: 1,
    marginRight: 8,
  },
});
