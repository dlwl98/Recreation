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
  const { gameStatus, elements, currentElementIndex, gameover, resumeAndStartTimer, guess } =
    useContext(GameContext);
  const input = useRef<HTMLInputElement>(null);
  const [timer, setTimer] = useState(Date.now());

  const handleGame = () => {
    if (gameStatus === 'notinit') return;
    if (gameStatus === 'paused') {
      setTimer(resumeAndStartTimer());
    }
    if (gameStatus === 'preceeding') {
      if (input.current!.value === '') {
        toast.error('정답을 입력해주세요');
        return;
      }
      guess(input.current!.value);
      input.current!.value = '';
    }
    if (gameStatus === 'finished') {
      gameover();
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
      {gameStatus === 'preceeding' ? (
        <Flex direction="column" align="center">
          <div>{elements[currentElementIndex]?.quiz}</div>
          <Spacing />
          <Input ref={input} autoFocus={true} />
          <Spacing />
          <Button
            color={theme.color.gray700}
            border={`1px solid ${theme.color.orange700}`}
            onClick={handleGame}
          >
            제출
          </Button>
          <CountDown timer={timer} />
        </Flex>
      ) : gameStatus === 'finished' ? (
        <h1>엔터시 다시시작</h1>
      ) : (
        <h1>엔터시 다음문제</h1>
      )}
    </Flex>
  );
};

export default GameController;
