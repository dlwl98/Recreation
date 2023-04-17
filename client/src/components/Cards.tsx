import { css } from '@emotion/css';
import { useEffect, useState } from 'react';

import { Post } from '@api/getPosts';

import Card from '@components/Card';

import Flex from '@ds/Flex';

type Props = {
  width: number;
  cards: Post[];
};

const Cards: React.FC<Props> = ({ width, cards }) => {
  const [standard, setStandard] = useState(Math.floor(window.innerWidth / width));

  const handleResize = () => {
    setStandard(Math.floor(window.innerWidth / width));
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
