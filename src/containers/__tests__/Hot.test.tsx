import React from 'react';
import {render} from '@testing-library/react-native';
import {MockedNavigator} from 'utils/testUtils';
import {Hot} from 'containers/Hot';
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

describe('Hot', () => {
  it('renders correctly', () => {
    const container = render(<MockedNavigator component={Hot} />);
    expect(container).toBeDefined();
  });
});
