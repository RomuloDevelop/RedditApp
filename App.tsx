/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {PURPLE} from 'config/colors';
import {Navigation} from 'navigation/index';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => (
  <SafeAreaProvider>
    <StatusBar
      animated={true}
      barStyle={'light-content'}
      backgroundColor={PURPLE}
      showHideTransition="fade"
      translucent={true}
    />
    <Navigation />
  </SafeAreaProvider>
);

export default App;
