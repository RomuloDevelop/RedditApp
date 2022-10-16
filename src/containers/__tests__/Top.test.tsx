import React from 'react';
import {render} from '@testing-library/react-native';
import {MockedNavigator} from 'utils/testUtils';
import {Top} from 'containers/Top';
import {cleanup} from '@testing-library/react-native';
import {server} from 'mocks/server';

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

describe('Top', () => {
  it('renders correctly', () => {
    const container = render(<MockedNavigator component={Top} />);
    expect(container).toBeDefined();
  });
});
