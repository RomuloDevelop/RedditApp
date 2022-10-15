import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PostStack} from './PostStack';
import {POSTS, POST} from './routes';
import {WebViewPost} from 'containers/WebViewPost';
import {PURPLE} from 'config/colors';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const safeArea = useSafeAreaInsets();
  const paddingTop = Platform.OS === 'android' ? safeArea.top : 0;

  return (
    <View style={[styles.container, {paddingTop}]}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={POSTS}
            options={{headerShown: false}}
            component={PostStack}
          />
          <Stack.Screen
            name={POST}
            options={{
              headerTintColor: PURPLE,
              headerTitleStyle: {color: 'black'},
            }}
            component={WebViewPost}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
