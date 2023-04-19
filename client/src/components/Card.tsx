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
  const { title, detail, username, createAt, likes, hits, category } = card;
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
            <div className={marginRight10px}>{createdAtString}</div>
            <div>{'by ' + username}</div>
          </Flex>
          <Flex align="center">
            <Flex className={marginRight10px} align="flex-end">
              <Icon
                name="visibility"
                fill={0}
                size="1.2rem"
                color={theme.color.gray700}
                className={css`
                  margin-right: 2px;
                `}
              />
              <div className={marginRight10px}>{hits}</div>
              <Icon
                name="favorite"
                fill={1}
                size="1.2rem"
                color={theme.color.gray700}
                className={css`
                  margin-right: 2px;
                `}
              />
              {likes}
            </Flex>
          </Flex>
        </Flex>
        <Spacing />

        <div className={marginRight10px}>{categoriesDisplayString[category]}</div>
      </Flex>
    </div>
  );
};

const marginRight10px = css`
  margin-right: 10px;
`;

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
