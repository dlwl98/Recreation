import { createContext, useState } from 'react';

import { shuffleArray } from '@utils/shuffle';

import { Categories } from '@custom-types/Categories';

import { PostElement } from '@api/getPost';

export type Feedback = 'no' | 'success' | 'fail' | 'tryagain';
export type GameAlert = {
  type: Feedback;
  alertColor: string;
};
export type GameStatus = 'notinit' | 'paused' | 'preceeding' | 'finished';

export type GameContextType = {
  gameStatus: GameStatus;
  gameAlert: GameAlert;
  category: Categories;
  elements: PostElement[];
  currentElementIndex: number;
  setGame: (
    category: Categories,
    elements: PostElement[],
    deathCount: number,
    timeout: number,
  ) => void;
  gameover: () => void;
  resumeAndStartTimer: () => number;
  guess: (userTyped: string) => void;
};

export const GameContext = createContext<GameContextType>({
  gameStatus: 'notinit',
  gameAlert: { type: 'no', alertColor: 'black' },
  category: '4word',
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
  const [gameAlert, setGameAlert] = useState<GameAlert>({ type: 'no', alertColor: 'black' });
  const [category, setCategory] = useState<Categories>('4word');
  const [elements, setElements] = useState<PostElement[]>([]);
  const [currentElementIndex, setCurrentElementIndex] = useState(0);
  const [deathCount, setDeathCount] = useState(1);
  const [timer, setTimer] = useState(0);

  const setGame = (
    category: Categories,
    elements: PostElement[],
    deathCount: number,
    timeout: number,
  ) => {
    setGameOption({ deathCount, timeout });
    setDeathCount(deathCount);
    setGameStatus('paused');
    setCurrentElementIndex(0);
    shuffleArray(elements);
    setCategory(category);
    setGameAlert({ type: 'no', alertColor: 'black' });
    setElements(elements);
  };

  const timeover = () => {
    setCurrentElementIndex((state) => state + 1);
    setDeathCount(gameOption.deathCount);
    setGameStatus('paused');
    setGameAlert({ type: 'fail', alertColor: 'red' });
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
    setGameAlert({ type: 'no', alertColor: 'black' });
    return Date.now() + gameOption.timeout;
  };

  const guess = (userTyped: string) => {
    if (gameStatus !== 'preceeding') return;
    if (userTyped.replace(/ /g, '') === elements[currentElementIndex].answer.replace(/ /g, '')) {
      clearTimeout(timer);
      setCurrentElementIndex((state) => state + 1);
      setDeathCount(gameOption.deathCount);
      setGameStatus('paused');
      setGameAlert({ type: 'success', alertColor: 'green' });
      if (currentElementIndex + 1 >= elements.length) {
        setGameStatus('finished');
        return;
      }
      return;
    }
    if (deathCount <= 1) {
      clearTimeout(timer);
      setCurrentElementIndex((state) => state + 1);
      setDeathCount(gameOption.deathCount);
      setGameStatus('paused');
      setGameAlert({ type: 'fail', alertColor: 'red' });
      if (currentElementIndex + 1 >= elements.length) {
        setGameStatus('finished');
        return;
      }
      return;
    }
    setGameAlert({ type: 'tryagain', alertColor: 'red' });
    setDeathCount(deathCount - 1);
  };

  return (
    <GameContext.Provider
      value={{
        gameStatus,
        gameAlert,
        category,
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
