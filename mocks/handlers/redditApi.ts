import {rest} from 'msw';
import {POST_CATEGORY, BASE_URL} from 'config/constants';
import {SUCCESS_RESPONSE} from './config';

const endpointFactory = (category: POST_CATEGORY) =>
  rest.get(`${BASE_URL}/${category}.json`, (req, res, ctx) => {
    const limit = req.url.searchParams.get('limit');
    return res(
      ctx.delay(100),
      ctx.status(200),
      ctx.json(SUCCESS_RESPONSE(limit ? parseInt(limit) : 0)),
    );
  });

export default [
  endpointFactory(POST_CATEGORY.HOT),
  endpointFactory(POST_CATEGORY.NEW),
  endpointFactory(POST_CATEGORY.TOP),
  endpointFactory(POST_CATEGORY.CONTROVERSIAL),
];
