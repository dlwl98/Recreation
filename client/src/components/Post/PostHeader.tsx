import { css } from '@emotion/css';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as FavoriteFillSvg } from '@assets/favorite_fill.svg';
import { ReactComponent as VisibilitySvg } from '@assets/visibility.svg';

import { getCreatedAtString } from '@utils/getCreatedAtString';

import { categoriesDisplayString } from '@custom-types/Categories';

import { theme } from '@styles/theme';

import { Post } from '@api/getPosts';

import Flex from '@ds/Flex';
import Spacing from '@ds/Spacing';

const PostHeader = ({ post }: { post: Post }) => {
  const navigate = useNavigate();

  return (
    <>
      <h1>
        <span
          className={css`
            color: ${theme.color.orange700};
            cursor: pointer;
            :hover {
              color: ${theme.color.orange100};
            }
          `}
          onClick={() => navigate(`/?filter=${post.category}`)}
        >
          {categoriesDisplayString[post.category]}
        </span>
      </h1>
      <h1
        className={css`
          font-size: 2.5rem;
        `}
      >
        {post.title}
      </h1>
      <Flex
        align="center"
        justify="space-between"
        className={css`
          margin: 0 10px;
        `}
      >
        <Flex align="center">
          <div>{post.username}</div>
          <div
            className={css`
              margin: 0 5px;
            `}
          >
            ·
          </div>
          <div>{getCreatedAtString(post.createAt)}</div>
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
          {post.hits}
          <FavoriteFillSvg
            width="1.2rem"
            height="1.2rem"
            fill={theme.color.gray700}
            className={css`
              margin: 0 2px 0 10px;
            `}
          />
          {post.likes}
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
        {post.detail}
      </div>
    </>
  );
};

export default PostHeader;
