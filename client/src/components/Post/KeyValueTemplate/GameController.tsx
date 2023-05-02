import { css, cx } from '@emotion/css';
import { useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

import { theme } from '@styles/theme';

import Button from '@ds/Button';
import Flex from '@ds/Flex';
import Input from '@ds/Input';
import Spacing from '@ds/Spacing';

import CountDown from '../../CountDown';
import { GameContext } from './GameContext';

const GameController = () => {
  const {
    gameStatus,
    gameAlert,
    category,
    elements,
    currentElementIndex,
    gameover,
    resumeAndStartTimer,
    guess,
  } = useContext(GameContext);
  const input = useRef<HTMLInputElement>(null);
  const alert = useRef<HTMLHeadingElement>(null);
  const [timer, setTimer] = useState(Date.now());

  const handleGame = () => {
    switch (gameStatus) {
      case 'notinit':
        break;

      case 'paused':
        setTimer(resumeAndStartTimer());
        break;

      case 'preceeding':
        if (input.current!.value === '') {
          toast.error('정답을 입력해주세요');
          break;
        }
        guess(input.current!.value);
        break;

      case 'finished':
        gameover();
        break;
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key !== 'Enter') return;
    handleGame();
  };

  useEffect(() => {
    document.addEventListener('keypress', handleKeyPress);
    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <Flex direction="column" align="center">
      {gameAlert.type === 'success' ? (
        <h1 className={cx(greenAlert, cssFontSize(3))}>정답!</h1>
      ) : (
        <></>
      )}
      {gameAlert.type === 'tryagain' ? (
        <h1 className={cx(redAlert, cssFontSize(3))}>틀렸습니다..</h1>
      ) : (
        <></>
      )}
      {gameAlert.type === 'fail' ? (
        category === 'choseong' ? (
          <h1 className={cx(redAlert, cssFontSize(3))}>
            실패! 정답은 {elements[currentElementIndex - 1].answer}
          </h1>
        ) : (
          <h1 className={cx(redAlert, cssFontSize(3))}>
            실패! 정답은{' '}
            {elements[currentElementIndex - 1].quiz + elements[currentElementIndex - 1].answer}
          </h1>
        )
      ) : (
        <></>
      )}
      {gameStatus === 'preceeding' ? (
        <Flex direction="column">
          <div className={cssFontSize(5)}>{elements[currentElementIndex]?.quiz}</div>
          <Spacing />
          <Flex
            align="center"
            className={css`
              width: 100%;
            `}
          >
            <Input
              ref={input}
              autoFocus={true}
              className={css`
                width: 100%;
              `}
            />
            <Button
              color={theme.color.gray700}
              border={`1px solid ${theme.color.orange700}`}
              onClick={handleGame}
              className={css`
                margin-left: 10px;
                width: 100px;
              `}
            >
              제출
            </Button>
          </Flex>
          <CountDown timer={timer} size={2} />
        </Flex>
      ) : (
        <></>
      )}
      {gameStatus === 'finished' ? <h1 className={cssFontSize(5)}>엔터시 다시시작</h1> : <></>}
      {gameStatus === 'paused' ? <h1 className={cssFontSize(5)}>엔터시 다음문제</h1> : <></>}
    </Flex>
  );
};

const cssFontSize = (size: number) => {
  return css`
    font-size: ${size}rem;
  `;
};

const redAlert = css`
  color: red;
`;

const greenAlert = css`
  color: green;
`;

export default GameController;
