import { Reducer, useReducer } from 'react';

export type TemplateStatus = 'notinit' | 'inited' | 'pausedSuccess' | 'pausedWrong' | 'preceeding';
export type TemplateState = {
  status: TemplateStatus;
  cursor: number;
  message: string;
  option: {
    timeLimit: number;
    deathCount: number;
  };
  deathCount: number;
  timerId: number;
};

export type TemplateAction = {
  type: string;
  status?: TemplateStatus;
  cursor?: number;
  message?: string;
  deathCount?: number;
  timeLimit?: number;
  timerId?: number;
};

export type TemplateReducer = Reducer<TemplateState, TemplateAction>;

const internalReducer: TemplateReducer = (state: TemplateState, action: TemplateAction) => {
  switch (action.type) {
    case 'initialize':
      return {
        ...state,
        status: 'inited',
        cursor: 0,
        deathCount: action.deathCount!,
        option: { deathCount: action.deathCount!, timeLimit: action.timeLimit! },
      };
    case 'success':
      clearTimeout(state.timerId);
      return {
        ...state,
        status: 'pausedSuccess',
        cursor: state.cursor + 1,
        message: action.message!,
      };
    case 'wrong':
      if (state.deathCount > 1)
        return {
          ...state,
          deathCount: state.deathCount - 1,
          message: '틀렸습니다',
        };
      clearTimeout(state.timerId);
      return {
        ...state,
        status: 'pausedWrong',
        cursor: state.cursor + 1,
        message: action.message!,
      };
    case 'timeout':
      return {
        ...state,
        status: 'pausedWrong',
        cursor: state.cursor + 1,
        message: action.message!,
      };
    case 'next':
      return {
        ...state,
        status: 'preceeding',
        message: '',
        deathCount: state.option.deathCount,
        timerId: action.timerId!,
      };
    case 'over':
      return initialState;
    default:
      throw new Error();
  }
};

const initialState: TemplateState = {
  status: 'notinit',
  cursor: 0,
  message: '',
  deathCount: 1,
  option: {
    timeLimit: 10000,
    deathCount: 1,
  },
  timerId: 0,
};

function useTemplate(reducer = internalReducer) {
  const [state, dispatch] = useReducer<TemplateReducer>(reducer, initialState);

  const initialize = (deathCount: number, timeLimit: number) =>
    dispatch({ type: 'initialize', deathCount, timeLimit });
  const guessSuccess = (message: string) => dispatch({ type: 'success', message });
  const guessWrong = (message: string) => dispatch({ type: 'wrong', message });
  const timeout = (message: string) => dispatch({ type: 'timeout', message });
  const next = (timerId: number) => dispatch({ type: 'next', timerId });
  const over = () => dispatch({ type: 'over' });

  return { state, initialize, guessSuccess, guessWrong, timeout, next, over };
}

useTemplate.reducer = internalReducer;

export { useTemplate };
