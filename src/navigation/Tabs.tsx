import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Controversial} from '../containers/Controversial';
import {Hot} from '../containers/Hot';
import {News} from '../containers/New';
import {Top} from '../containers/Top';

const Tab = createMaterialTopTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Hot" component={Hot} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Controversials" component={Controversial} />
      <Tab.Screen name="Top" component={Top} />
    </Tab.Navigator>
  );
};
