import { rest } from 'msw';

type PostLoginReqBody = {
  email: string;
  password: string;
};

export const handlers = [
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
