import { rest } from 'msw';

import { Categories } from '@custom-types/Categories';

import { GetPostResponse, PostElement } from '@api/getPost';
import { GetPostsOptions, Post } from '@api/getPosts';

type PostLoginReqBody = {
  email: string;
  password: string;
};

const getRandomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const mockposts: Post[] = Array.from({ length: 1000 }).map((_, i) => {
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
    hits: 100 + i * 10,
    category: categories[i % 3],
  };
});

export const mockPostResponses: GetPostResponse[] = mockposts.map((post) => {
  const elements = [];
  if (post.category === 'choseong') {
    elements.push({ quiz: 'ㄱㄹ', answer: '가렌' });
    elements.push({ quiz: 'ㅋㅈㅅ', answer: '카직스' });
    elements.push({ quiz: 'ㅇㅍㄹㅇㅅ', answer: '아펠리오스' });
    elements.push({ quiz: 'ㄴㄴㅇ ㅇㄹㅍ', answer: '누누와 윌럼프' });
  }

  if (post.category === '4word') {
    elements.push({ quiz: '온고', answer: '지신' });
    elements.push({ quiz: '장유', answer: '유서' });
    elements.push({ quiz: '동귀', answer: '어진' });
  }
  if (post.category === 'sokdam') {
    elements.push({ quiz: '호랑이도', answer: '제 말하면 온다' });
    elements.push({ quiz: '물이 깊어야', answer: '고기가 모인다' });
    elements.push({ quiz: '개구리', answer: '올챙이 적 생각 못한다' });
    elements.push({ quiz: '빈대 잡으려고', answer: '초가삼간 태운다' });
  }
  return { post, elements };
});

export const handlers = [
  rest.get<GetPostsOptions>('/api/posts', async (req, res, ctx) => {
    const filter = req.url.searchParams.get('filter');
    const order = req.url.searchParams.get('order');
    const search = req.url.searchParams.get('search') || '';
    const pageParam = req.url.searchParams.get('pageParam') || '0';

    let resultPosts = mockposts;

    if (filter !== 'all') {
      resultPosts = resultPosts.filter((post) => post.category === filter);
    }

    if (order === 'popularity') {
      resultPosts = resultPosts.sort((a, b) => b.hits - a.hits);
    }

    if (order === 'newest') {
      resultPosts = resultPosts.sort((a, b) => b.createAt.getTime() - a.createAt.getTime());
    }

    if (search !== '') {
      resultPosts = resultPosts.filter(
        (post) => post.title.includes(search) || post.detail.includes(search),
      );
    }
    const page = Number(pageParam);

    return res(
      ctx.delay(getRandomNumber(100, 500)),
      ctx.status(200),
      ctx.json({
        posts: resultPosts.slice(page * 30, (page + 1) * 30),
        nextCursor: page + 1,
      }),
    );
  }),

  rest.get('/api/post/:id', (req, res, ctx) => {
    const params = req.params;
    const id = (params.id as string).substring(1);

    return res(
      ctx.delay(getRandomNumber(100, 500)),
      ctx.status(200),
      ctx.json(
        mockPostResponses.find((mockPostResponse) => mockPostResponse.post.id === Number(id)),
      ),
    );
  }),

  rest.post<PostLoginReqBody>('/api/login', async (req, res, ctx) => {
    return res(
      ctx.delay(getRandomNumber(100, 500)),
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
      ctx.delay(getRandomNumber(100, 500)),
      ctx.status(200),
      ctx.json({
        accessToken: 'qwerqwer12341234',
        refreshToken: '12341234qwerqwer',
      }),
    );
  }),
];
