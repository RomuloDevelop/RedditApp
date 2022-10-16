import React from 'react';
import {render} from '@testing-library/react-native';
import {MockedNavigator} from 'utils/testUtils';
import {Controversial} from 'containers/Controversial';
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

describe('Controversial', () => {
  it('renders correctly', () => {
    const container = render(<MockedNavigator component={Controversial} />);
    expect(container).toBeDefined();
  });
});
