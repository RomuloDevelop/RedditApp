import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {addNumberSuffix} from 'src/utils/statsParser';
import {IPost} from 'types';
import Octicons from 'react-native-vector-icons/Octicons';
import {StatsItem} from '../atoms/StatsItem';
import {GREY} from 'config/colors';

export const Stats = ({score, num_comments}: IPost) => {
  const scoreStat = useMemo(() => addNumberSuffix(score), [score]);
  const commentStat = useMemo(
    () => addNumberSuffix(num_comments),
    [num_comments],
  );

  return (
    <View style={styles.statsContainer}>
      <View style={styles.stats}>
        <StatsItem name="graph" value={scoreStat} />
        <StatsItem name="comment" value={commentStat} />
      </View>
      <Octicons name="link-external" size={20} color={GREY} />
    </View>
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stats: {
    flexDirection: 'row',
  },
});
