import React from 'react';
import {render} from '@testing-library/react-native';
import {StatsItem} from '../StatsItem';

describe('<SetItem />', () => {
  it('render correctly', () => {
    const params = {name: 'graph', value: '2K'};
    const container = render(<StatsItem {...params} />);
    expect(container).toBeDefined();
  });

  it('should display correct value', () => {
    const params = {name: 'graph', value: '2K'};
    const {getByText} = render(<StatsItem {...params} />);
    const component = getByText(params.value);
    expect(component).toBeDefined();
  });
});
