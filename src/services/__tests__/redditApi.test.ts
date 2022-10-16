import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {POST_CATEGORY} from 'config/constants';
import {cleanup} from '@testing-library/react-native';
import {server} from 'mocks/server';
import axios from '../interceptor';
import * as redditApi from '../redditApi';

dayjs.extend(relativeTime);

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

const mockResponse = {
  name: 'post_name',
  title: 'post_title',
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
  created: dayjs.unix(1665895268).fromNow(),
};

describe('redditApi', () => {
  it('should return correct object', async () => {
    const response = await redditApi.getPosts(POST_CATEGORY.HOT, {limit: 1});
    expect(response).toStrictEqual({after: '1234', posts: [mockResponse]});
  });

  it('should return error object', async () => {
    const spyAxios = jest
      .spyOn(axios, 'get')
      .mockImplementation(() => Promise.reject());
    const response = await redditApi.getPosts(POST_CATEGORY.HOT, {limit: 1});

    expect(response).toStrictEqual({
      posts: [],
      after: '',
    });

    spyAxios.mockRestore();
  });
});
