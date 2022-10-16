import React from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {WebView} from 'react-native-webview';
import {IPost} from 'types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Platform} from 'react-native';

export const WebViewPost = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  const route = useRoute<RouteProp<{Post: IPost}, 'Post'>>();
  const {params} = route;

  navigation.setOptions({
    headerShown: true,
    headerTitle: params.title,
  });
  const uri = `https://www.reddit.com${params.permalink}`;

  return (
    <WebView
      source={{uri}}
      style={{marginTop: Platform.OS === 'android' ? top : 0}}
    />
  );
};
