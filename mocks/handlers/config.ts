import {TRedditResponse} from 'types';

export const SUCCESS_RESPONSE = (limit: number): TRedditResponse => ({
  data: {
    after: '1234',
    children: new Array(limit).fill({
      data: {
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
        created: 1665895268,
      },
    }),
  },
});
