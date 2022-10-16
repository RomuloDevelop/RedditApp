import React from 'react';
import {Controversial} from '../containers/Controversial';
import {Hot} from '../containers/Hot';
import {News} from '../containers/New';
import {Top} from '../containers/Top';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {PURPLE} from 'config/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HEADER_PADDING_TOP} from 'config/constants';

const Tab = createMaterialTopTabNavigator();

export const PostStack = () => {
  const safeArea = useSafeAreaInsets();
  const paddingTop = safeArea.top + HEADER_PADDING_TOP;

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
      <Tab.Screen
        name="Hot"
        options={{
          lazy: true,
        }}
        component={Hot}
      />
      <Tab.Screen
        name="News"
        options={{
          lazy: true,
        }}
        component={News}
      />
      <Tab.Screen
        name="Arguable"
        options={{
          lazy: true,
        }}
        component={Controversial}
      />
      <Tab.Screen
        name="Top"
        options={{
          lazy: true,
        }}
        component={Top}
      />
    </Tab.Navigator>
  );
};
