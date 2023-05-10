import { useTemplateContext } from '../useTemplateContext';
import Btn from './Btn';

export default function NextBtn({
  onNext,
  onTimeout,
}: {
  onNext: (timerId: number) => void;
  onTimeout: (message: string) => void;
}) {
  const { keyValues, state } = useTemplateContext();
  if (state.cursor >= keyValues.length) return null;
  return (
    <Btn
      onClick={() => {
        const timerId = setTimeout(onTimeout, state.option.timeLimit);
        onNext(timerId);
      }}
    >
      다음문제
    </Btn>
  );
}
