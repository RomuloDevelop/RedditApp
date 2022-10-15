import React from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {WebView} from 'react-native-webview';
import {IPost} from 'types';

export const WebViewPost = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<{Post: IPost}, 'Post'>>();
  const {params} = route;

  navigation.setOptions({
    headerShown: true,
    headerTitle: params.title,
  });
  const uri = `https://www.reddit.com${params.permalink}`;

  return <WebView source={{uri}} />;
};
