import React from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {WebView} from 'react-native-webview';
import {IPost} from 'types';
import {useHeaderHeight} from '@react-navigation/elements';
import {Platform, StyleSheet, View} from 'react-native';
import {useEffect} from 'react';

export const WebViewPost = () => {
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();
  const route = useRoute<RouteProp<{Post: IPost}, 'Post'>>();
  const {params} = route;
  const uri = `https://www.reddit.com${params.permalink}`;

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: params.title,
    });
  }, [navigation, params]);

  return (
    <View
      style={[
        styles.container,
        Platform.OS === 'android' && {paddingTop: headerHeight},
      ]}>
      <WebView source={{uri}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
});
