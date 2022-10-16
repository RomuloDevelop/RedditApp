import React from 'react';
import {render} from '@testing-library/react-native';
import {MockedNavigator} from 'utils/testUtils';
import {WebViewPost} from 'containers/WebViewPost';

afterEach(() => {
  global.setOptions.mockClear();
});

describe('WebViewPost', () => {
  it('renders correctly', () => {
    const container = render(<MockedNavigator component={WebViewPost} />);
    expect(container).toBeDefined();
  });

  it('should call setOptions', () => {
    const params = {
      title: 'Title',
      permalink: 'google.com',
    };

    render(<MockedNavigator component={WebViewPost} params={params} />);

    expect(global.setOptions).toBeCalledWith({
      headerShown: true,
      headerTitle: 'Title',
    });
  });
});
