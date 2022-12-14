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
import {Navigation} from 'navigation/index';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        backgroundColor="transparent"
        showHideTransition="fade"
        translucent={true}
      />
      <Navigation />
    </SafeAreaProvider>
  );
}

export default App;
