import { css } from '@emotion/css';
import { useEffect, useState } from 'react';

import { Post } from '@api/getPosts';

import Card from '@components/Card';

import Flex from '@ds/Flex';

type Props = {
  standard: number;
  cards: Post[];
};

const Cards: React.FC<Props> = ({ standard, cards }) => {
  return (
    <Flex className={style}>
      {cards.map((card) => (
        <Card
          key={card.id}
          className={css`
            width: calc(100% / ${standard});
          `}
          card={card}
        />
      ))}
    </Flex>
  );
};

const style = css`
  flex-wrap: wrap;
`;

export default Cards;
