import { css } from '@emotion/css';
import { useNavigate, useParams } from 'react-router-dom';

import { getCreatedAtString } from '@utils/getCreatedAtString';

import { categoriesDisplayString } from '@custom-types/Categories';

import { theme } from '@styles/theme';

import { usePostQuery } from '@hooks/usePostQuery';

import PostLayout from '@layouts/PostLayout';

import Header from '@components/Header';
import Icon from '@components/Icon';

import Flex from '@ds/Flex';
import Spacing from '@ds/Spacing';

type PostPageParams = {
  id: string;
};

const PostPage = () => {
  const { id } = useParams() as PostPageParams;
  const { data, status } = usePostQuery({ id });
  const navigate = useNavigate();

  return (
    <div>
      <Header shouldDisplayProfile={true} />
      <Spacing size={theme.spacing.belowHeader} />
      <PostLayout>
        {status === 'success' ? (
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
                <Icon
                  name="visibility"
                  fill={0}
                  size="1.2rem"
                  color={theme.color.gray700}
                  className={css`
                    margin-right: 2px;
                  `}
                />
                {data.post.hits}
                <Icon
                  name="favorite"
                  fill={1}
                  size="1.2rem"
                  color={theme.color.gray700}
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
        ) : (
          <div>Loading</div>
        )}
      </PostLayout>
    </div>
  );
};

export default PostPage;
