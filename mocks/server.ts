import {setupServer} from 'msw/node';
import redditApi from './handlers/redditApi';

export const server = setupServer(...redditApi);
