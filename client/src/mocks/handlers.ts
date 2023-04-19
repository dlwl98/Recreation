import { rest } from 'msw';

import { Categories } from '@custom-types/Categories';

import { GetPostsOptions, Post } from '@api/getPosts';

type PostLoginReqBody = {
  email: string;
  password: string;
};

export const mockposts: Post[] = Array.from({ length: 100 }).map((_, i) => {
  const categories: Categories[] = ['choseong', '4word', 'sokdam'];
  return {
    id: i + 1,
    title: `제목${i + 1}제목${i + 1}제목${i + 1}제목${i + 1}제목${i + 1}제목${i + 1}제목${
      i + 1
    }제목${i + 1}제목${i + 1}제목${i + 1}`,
    detail: `내용입니다${i + 1}내용입니다${i + 1}내용입니다${i + 1}내용입니다${i + 1}내용입니다${
      i + 1
    }내용입니다${i + 1}내용입니다${i + 1}내용입니다${i + 1}내용입니다${i + 1}내용입니다${i + 1}`,
    username: `testuser${i + 1}`,
    createAt: new Date(new Date().getTime() - i * 10000),
    likes: 22 + i,
    category: categories[i % 3],
  };
});

export const handlers = [
  rest.get<GetPostsOptions>('/api/posts', async (req, res, ctx) => {
    const filter = req.url.searchParams.get('filter');
    const order = req.url.searchParams.get('order');
    const search = req.url.searchParams.get('search') || '';

    let resultPosts = mockposts;

    if (filter !== 'all') {
      resultPosts = resultPosts.filter((post) => post.category === filter);
    }

    if (order === 'popularity') {
      resultPosts = resultPosts.sort((a, b) => b.likes - a.likes);
    }

    if (order === 'newest') {
      resultPosts = resultPosts.sort((a, b) => b.createAt.getTime() - a.createAt.getTime());
    }

    if (search !== '') {
      resultPosts = resultPosts.filter(
        (post) => post.title.includes(search) || post.detail.includes(search),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        posts: resultPosts,
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
