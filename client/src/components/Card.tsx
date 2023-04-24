import { css, cx } from '@emotion/css';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as FavoriteFillSvg } from '@assets/favorite_fill.svg';
import { ReactComponent as VisibilitySvg } from '@assets/visibility.svg';

import { getCreatedAtString } from '@utils/getCreatedAtString';

import { categoriesDisplayString } from '@custom-types/Categories';

import { theme } from '@styles/theme';

import { Post } from '@api/getPosts';

import Flex from '@ds/Flex';
import Spacing from '@ds/Spacing';

type Props = {
  className: string;
  card: Post;
};

const Card: React.FC<Props> = ({ className, card }) => {
  const { id, title, detail, username, createAt, likes, hits, category } = card;
  const createdAtString = getCreatedAtString(createAt);
  const navigate = useNavigate();

  return (
    <div className={className}>
      <Flex
        direction="column"
        onClick={() => navigate(`/post/${id}`)}
        className={css`
          margin: 10px;
          padding: 10px;
          background-color: ${theme.color.gray100};
          border-radius: 5px;
          border: 2px solid ${theme.color.gray100};
          cursor: pointer;
          :hover {
            border: 2px solid ${theme.color.orange700};
          }
        `}
      >
        <div
          className={cx(
            marginRight10px,
            css`
              font-weight: 800;
              color: ${theme.color.orange700};
            `,
          )}
        >
          {categoriesDisplayString[category]}
        </div>
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
              <VisibilitySvg
                width="1.2rem"
                height="1.2rem"
                fill={theme.color.gray700}
                className={css`
                  margin-right: 2px;
                `}
              />
              <div className={marginRight10px}>{hits}</div>
              <FavoriteFillSvg
                width="1.2rem"
                height="1.2rem"
                fill={theme.color.gray700}
                className={css`
                  margin-right: 2px;
                `}
              />
              {likes}
            </Flex>
          </Flex>
        </Flex>
        <Spacing />
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
