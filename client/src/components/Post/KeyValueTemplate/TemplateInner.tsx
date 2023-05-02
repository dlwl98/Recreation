import { css } from '@emotion/css';
import { useContext, useRef } from 'react';

import { theme } from '@styles/theme';

import Button from '@ds/Button';
import Flex from '@ds/Flex';
import Input from '@ds/Input';
import Spacing from '@ds/Spacing';

import { TemplateProps } from '../TemplateProps';
import { GameContext } from './GameContext';
import GameController from './GameController';

const TemplateInner: React.FC<TemplateProps> = ({ category, elements }) => {
  const { gameStatus, setGame } = useContext(GameContext);
  const deathCountRef = useRef<HTMLInputElement>(null);
  const secRef = useRef<HTMLInputElement>(null);

  const start = () => {
    setGame(
      category,
      elements,
      Number(deathCountRef.current?.value) || 1,
      Number(secRef.current?.value) * 1000 || 10000,
    );
  };

  return (
    <>
      {gameStatus !== 'notinit' ? (
        <GameController />
      ) : (
        <Flex direction="column" align="center">
          <Input type="number" placeholder="시도 가능 횟수(기본값: 1)" ref={deathCountRef} />
          <Spacing />
          <Input type="number" placeholder="설정 시간(기본값: 10초)" ref={secRef} />
          <Spacing />
          <Button
            color={theme.color.gray700}
            border={`1px solid ${theme.color.gray700}`}
            onClick={start}
            className={css`
              :hover {
                border-color: ${theme.color.orange700};
              }
            `}
          >
            설정완료
          </Button>
        </Flex>
      )}
    </>
  );
};

export default TemplateInner;
