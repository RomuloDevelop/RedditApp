import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {Post} from '../Post';

const mockPost = {
  name: 'post_name',
  title: 'kamehameha',
  thumbnail:
    'https://b.thumbs.redditmedia.com/1b365trsDvYQAv2HaAxgWGQLctf462T_ZkD1_zJ8szM.jpg',
  thumbnail_width: 150,
  thumbnail_height: 100,
  author: 'Romulo',
  permalink:
    '/r/pics/comments/y41hvq/president_biden_stopped_for_tacos_at_our_friends/',
  score: 1200,
  num_comments: 2000,
  id: 'post_name_1234',
  created: 1665895268,
};

describe('<Post />', () => {
  it('render correctly', () => {
    const params = {
      post: mockPost,
      onPress: () => {},
      animate: false,
      delay: 0,
    };

    const container = render(<Post {...params} />);
    expect(container).toBeDefined();
  });

  it('should display correct value', async () => {
    const onPress = jest.fn();
    const params = {
      post: mockPost,
      onPress,
      animate: false,
      delay: 0,
    };

    const {getByTestId} = render(<Post {...params} />);

    const btn = getByTestId('postBtn');

    fireEvent.press(btn);

    await waitFor(() => {
      expect(onPress).toBeCalledWith(mockPost);
    });
  });
});
