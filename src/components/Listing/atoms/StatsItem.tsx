import {GREY} from 'config/colors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';

type Props = {
  name: string;
  value: number | string;
};

export const StatsItem = ({name, value}: Props) => {
  return (
    <View style={styles.container}>
      <Octicons name={name} size={20} color={GREY} />
      <Text style={styles.statsValue}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  statsValue: {
    color: GREY,
    fontSize: 14,
    marginLeft: 4,
  },
});
