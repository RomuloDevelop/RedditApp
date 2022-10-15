import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PostStack} from './PostStack';
import {POSTS, POST} from './routes';
import {WebViewPost} from 'containers/WebViewPost';
import {PURPLE} from 'config/colors';

const Stack = createNativeStackNavigator();

export const Navigation = () => (
  <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {flex: 1},
});
