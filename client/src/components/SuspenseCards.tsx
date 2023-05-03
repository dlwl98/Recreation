import { css } from '@emotion/css';

import { theme } from '@styles/theme';

import Card from '@components/Card';

import Flex from '@ds/Flex';

import { mockposts } from '../mocks/handlers';

const SuspenseCards = () => {
  const width = Math.floor(window.innerWidth / 400);

  return (
    <Flex className={style}>
      {mockposts.slice(0, 30).map((card) => (
        <Card
          key={card.id}
          className={css`
            width: calc(100% / ${width});
            color: ${theme.color.gray100};
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

export default SuspenseCards;
