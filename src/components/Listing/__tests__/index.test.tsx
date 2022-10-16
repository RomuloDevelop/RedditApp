import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import {Listing} from '../index';
import {ITEMS_PER_PAGE, POST_CATEGORY} from 'config/constants';
import {cleanup} from '@testing-library/react-native';
import {server} from 'mocks/server';
import {MockedNavigator} from 'utils/testUtils';

beforeAll(() => {
  server.listen({
    onUnhandledRequest: 'bypass',
  });
});

afterEach(() => {
  cleanup();
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe('<Listing />', () => {
  it('render correctly', () => {
    const params = {
      category: POST_CATEGORY.HOT,
    };
    const container = render(
      <MockedNavigator component={() => <Listing {...params} />} />,
    );
    expect(container).toBeDefined();
  });

  it('should display correct value', async () => {
    const params = {
      category: POST_CATEGORY.HOT,
    };
    const {queryAllByTestId} = render(
      <MockedNavigator component={() => <Listing {...params} />} />,
    );

    await waitFor(() => {
      const components = queryAllByTestId('postContainer');
      expect(components.length).toBe(ITEMS_PER_PAGE);
    });
  });
});
