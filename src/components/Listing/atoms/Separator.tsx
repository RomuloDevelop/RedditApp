import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    opacity: 0.2,
    marginVertical: 15,
  },
});
