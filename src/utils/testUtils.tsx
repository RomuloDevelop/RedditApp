import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

type MockedNavigatorProps = {
  component: () => JSX.Element;
  params?: Record<string, any>;
  nextRouteName?: string;
};

const MockedNavigator = ({
  component,
  params = {},
  nextRouteName = 'nextRouteName',
}: MockedNavigatorProps) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MockedScreen"
          component={component}
          initialParams={params}
        />
        <Stack.Screen name={nextRouteName} component={() => <></>} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {MockedNavigator};
