import { rest } from 'msw';

import { GetPostsOptions } from '@api/getPosts';

type PostLoginReqBody = {
  email: string;
  password: string;
};

export const handlers = [
  rest.get<GetPostsOptions>('/api/posts', async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        posts: [
          {
            title: '123123',
            detail: '123123',
            username: '123123',
            createAt: new Date(),
            likes: '123',
            category: '4word',
          },
          {
            title: '123123',
            detail: '123123',
            username: '123123',
            createAt: new Date(),
            likes: '123',
            category: '4word',
          },
          {
            title: '123123',
            detail: '123123',
            username: '123123',
            createAt: new Date(),
            likes: '123',
            category: '4word',
          },
        ],
      }),
    );
  }),

  rest.post<PostLoginReqBody>('api/login', async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        username: 'aaaa1111',
        tokens: {
          accessToken: 'qwerqwer12341234',
          refreshToken: '12341234qwerqwer',
        },
      }),
      ctx.cookie('refreshToken', '12341234qwerqwer', { httpOnly: true }),
    );
  }),

  rest.post('/api/refresh', (req, res, ctx) => {
    if (!req.cookies.refreshToken) {
      return res(ctx.status(400));
    }
    return res(
      ctx.status(200),
      ctx.json({
        accessToken: 'qwerqwer12341234',
        refreshToken: '12341234qwerqwer',
      }),
    );
  }),
];
