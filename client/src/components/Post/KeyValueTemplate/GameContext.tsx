import { createContext, useState } from 'react';
import { toast } from 'react-hot-toast';

import { shuffleArray } from '@utils/shuffle';

import { PostElement } from '@api/getPost';

export type GameStatus = 'notinit' | 'paused' | 'preceeding' | 'finished';

export type GameContextType = {
  gameStatus: GameStatus;
  elements: PostElement[];
  currentElementIndex: number;
  setGame: (elements: PostElement[], deathCount: number, timeout: number) => void;
  gameover: () => void;
  resumeAndStartTimer: () => number;
  guess: (userTyped: string) => void;
};

export const GameContext = createContext<GameContextType>({
  gameStatus: 'notinit',
  elements: [],
  currentElementIndex: 0,
  gameover: () => {},
  setGame: () => {},
  resumeAndStartTimer: () => NaN,
  guess: () => {},
});

type GameProviderProps = {
  children: React.ReactNode;
};

export const GameContextProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [gameOption, setGameOption] = useState({ deathCount: 1, timeout: 10000 });
  const [gameStatus, setGameStatus] = useState<GameStatus>('notinit');
  const [elements, setElements] = useState<PostElement[]>([]);
  const [currentElementIndex, setCurrentElementIndex] = useState(0);
  const [deathCount, setDeathCount] = useState(1);
  const [timer, setTimer] = useState(0);

  const setGame = (elements: PostElement[], deathCount: number, timeout: number) => {
    setGameOption({ deathCount, timeout });
    setDeathCount(deathCount);
    setGameStatus('paused');
    setCurrentElementIndex(0);
    shuffleArray(elements);
    setElements(elements);
  };

  const timeover = () => {
    setCurrentElementIndex((state) => state + 1);
    setDeathCount(gameOption.deathCount);
    toast.error(`시간초과! 정답은 "${elements[currentElementIndex].answer}"`);
    setGameStatus('paused');
    if (currentElementIndex + 1 >= elements.length) {
      setGameStatus('finished');
    }
  };

  const gameover = () => {
    setGameStatus('notinit');
  };

  const resumeAndStartTimer = () => {
    setTimer(setTimeout(timeover, gameOption.timeout));
    setGameStatus('preceeding');
    return Date.now() + gameOption.timeout;
  };

  const guess = (userTyped: string) => {
    if (gameStatus !== 'preceeding') return;
    if (userTyped === elements[currentElementIndex].answer) {
      clearTimeout(timer);
      setCurrentElementIndex((state) => state + 1);
      setDeathCount(gameOption.deathCount);
      toast.success('정답');
      setGameStatus('paused');
      if (currentElementIndex + 1 >= elements.length) {
        setGameStatus('finished');
        return;
      }
      return;
    }
    if (deathCount === 1) {
      clearTimeout(timer);
      setCurrentElementIndex((state) => state + 1);
      setDeathCount(gameOption.deathCount);
      toast.error(`실패! 정답은 "${elements[currentElementIndex].answer}"`);
      setGameStatus('paused');
      if (currentElementIndex + 1 >= elements.length) {
        setGameStatus('finished');
        return;
      }
      return;
    }
    toast.error('틀렸습니다');
    setDeathCount(deathCount - 1);
  };

  return (
    <GameContext.Provider
      value={{
        gameStatus,
        elements,
        currentElementIndex,
        setGame,
        gameover,
        resumeAndStartTimer,
        guess,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
