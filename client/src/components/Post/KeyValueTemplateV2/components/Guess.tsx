import { useRef } from 'react';

import Input from '@ds/Input';

import { useTemplateContext } from '../useTemplateContext';
import Btn from './Btn';

export default function Guess({
  onSuccess,
  onWrong,
}: {
  onSuccess: (message: string) => void;
  onWrong: (message: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { keyValues, state } = useTemplateContext();
  const keyValue = keyValues[state.cursor];

  if (state.status !== 'preceeding') return null;

  const onClick = () => {
    if (inputRef.current === null) onWrong(keyValue.toString());
    else if (keyValue.guess(inputRef.current.value)) onSuccess(keyValue.toString());
    else onWrong(keyValue.toString());
  };

  return (
    <div>
      {keyValues[state.cursor].quiz}
      <Input ref={inputRef} />
      <Btn onClick={onClick}>제출</Btn>
      {state.message}
    </div>
  );
}
