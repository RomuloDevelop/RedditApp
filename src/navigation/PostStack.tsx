import React from 'react';
import {Controversial} from '../containers/Controversial';
import {Hot} from '../containers/Hot';
import {News} from '../containers/New';
import {Top} from '../containers/Top';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {PURPLE} from 'config/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Platform} from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const PostStack = () => {
  const safeArea = useSafeAreaInsets();
  const paddingTop = Platform.OS === 'ios' ? safeArea.top : 0;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingTop,
          backgroundColor: PURPLE,
        },
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: {
          fontWeight: 'bold',
          textTransform: 'capitalize',
          fontSize: 15,
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Tab.Screen name="Hot" component={Hot} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Controversial" component={Controversial} />
      <Tab.Screen name="Top" component={Top} />
    </Tab.Navigator>
  );
};
