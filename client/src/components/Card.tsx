import { css } from '@emotion/css';

import { getCreatedAtString } from '@utils/getCreatedAtString';

import { Post } from '@api/getPosts';

import Flex from '@ds/Flex';

type Props = {
  className: string;
  card: Post;
};

const Card: React.FC<Props> = ({ className, card }) => {
  const { title, detail, username, createAt, likes, category } = card;
  return (
    <Flex className={className}>
      <Flex
        direction="column"
        className={css`
          margin: 10px;
          padding: 10px;
          background-color: gray;
          width: 100%;
        `}
      >
        <div>{title}</div>
        <div>{detail}</div>
        <div>{username}</div>
        <div>{getCreatedAtString(createAt)}</div>
        <div>{likes}</div>
        <div>{category}</div>
      </Flex>
    </Flex>
  );
};

export default Card;
