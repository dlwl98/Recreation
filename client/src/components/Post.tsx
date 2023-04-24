import { css } from '@emotion/css';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as FavoriteFillSvg } from '@assets/favorite_fill.svg';
import { ReactComponent as VisibilitySvg } from '@assets/visibility.svg';

import { getCreatedAtString } from '@utils/getCreatedAtString';

import { categoriesDisplayString } from '@custom-types/Categories';

import { theme } from '@styles/theme';

import { GetPostResponse } from '@api/getPost';

import Flex from '@ds/Flex';
import Spacing from '@ds/Spacing';

const Post = ({ data }: { data: GetPostResponse }) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>
        <span
          className={css`
            color: ${theme.color.orange700};
            cursor: pointer;
            :hover {
              color: ${theme.color.orange100};
            }
          `}
          onClick={() => navigate(`/?filter=${data.post.category}`)}
        >
          {categoriesDisplayString[data.post.category]}
        </span>
      </h1>
      <h1
        className={css`
          font-size: 2.5rem;
        `}
      >
        {data.post.title}
      </h1>
      <Flex
        align="center"
        justify="space-between"
        className={css`
          margin: 0 10px;
        `}
      >
        <Flex align="center">
          <div>{data.post.username}</div>
          <div
            className={css`
              margin: 0 5px;
            `}
          >
            ·
          </div>
          <div>{getCreatedAtString(data.post.createAt)}</div>
        </Flex>
        <Flex align="flex-end">
          <VisibilitySvg
            width="1.2rem"
            height="1.2rem"
            fill={theme.color.gray700}
            className={css`
              margin: 0 2px 0 10px;
            `}
          />
          {data.post.hits}
          <FavoriteFillSvg
            width="1.2rem"
            height="1.2rem"
            fill={theme.color.gray700}
            className={css`
              margin: 0 2px 0 10px;
            `}
          />
          {data.post.likes}
        </Flex>
      </Flex>
      <Spacing />
      <div
        className={css`
          border-top: 2px solid ${theme.color.gray100};
        `}
      />
      <Spacing />
      <div
        className={css`
          font-weight: 600;
          line-height: 1.5rem;
        `}
      >
        {data.post.detail}
      </div>
      <Spacing />
      {data.elements.map((element, i) => (
        <div key={`element_${i}`}>
          <div>{i + 1}번</div>
          <div>문제: {element.quiz}</div>
          <div>정답: {element.answer}</div>
          <Spacing />
        </div>
      ))}
    </div>
  );
};

export default Post;
