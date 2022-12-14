/* eslint-disable no-undef */
import 'react-native-gesture-handler/jestSetup';

import * as reanimatedUtils from 'react-native-reanimated/lib/reanimated2/jestUtils';

reanimatedUtils.setUpTests();

// jest.mock('react-native-reanimated', () => {
//   const Reanimated = require('react-native-reanimated/mock');

//   // The mock for `call` immediately calls the callback which is incorrect
//   // So we override it with a no-op
//   Reanimated.default.call = () => {};

//   return Reanimated;
// });

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

global.mockNavigate = jest.fn();
global.setOptions = jest.fn();

jest.mock('@react-navigation/native', () => {
  const _actualNav = jest.requireActual('@react-navigation/native');
  return {
    ..._actualNav,
    useNavigation: () => ({
      ..._actualNav.useNavigation(),
      navigate: global.mockNavigate,
      setOptions: global.setOptions,
    }),
  };
});
