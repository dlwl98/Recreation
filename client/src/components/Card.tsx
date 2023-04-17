import { css } from '@emotion/css';

import { getCreatedAtString } from '@utils/getCreatedAtString';

import { categoriesDisplayString } from '@custom-types/Categories';

import { theme } from '@styles/theme';

import { Post } from '@api/getPosts';

import Flex from '@ds/Flex';
import Spacing from '@ds/Spacing';

import Icon from './Icon';

type Props = {
  className: string;
  card: Post;
};

const Card: React.FC<Props> = ({ className, card }) => {
  const { title, detail, username, createAt, likes, category } = card;
  const createdAtString = getCreatedAtString(createAt);
  return (
    <div className={className}>
      <Flex
        direction="column"
        className={css`
          margin: 10px;
          padding: 10px;
          background-color: ${theme.color.gray100};
          border-radius: 5px;
        `}
      >
        <h3 className={cardTitleStyle}>{title}</h3>
        <div className={cardDetailStyle}>{detail}</div>
        <Spacing size={30} />
        <Flex
          justify="space-between"
          className={css`
            width: 100%;
          `}
        >
          <Flex>
            <Flex
              className={css`
                margin-right: 15px;
              `}
            >
              <Icon
                name="Favorite"
                fill={1}
                size="1.2rem"
                color={theme.color.gray700}
                className={css`
                  margin-right: 2px;
                `}
              />
              {likes}
            </Flex>
            <div>{categoriesDisplayString[category]}</div>
          </Flex>
          <div
            className={css`
              margin-right: 5px;
            `}
          >
            {username}
          </div>
        </Flex>
        <Spacing />
        <div>{createdAtString}</div>
      </Flex>
    </div>
  );
};

const cardTitleStyle = css`
  margin: 10px 0;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const cardDetailStyle = css`
  overflow: hidden;
  width: 100%;
  height: 3.6rem;
  line-height: 1.2rem;
`;

export default Card;
