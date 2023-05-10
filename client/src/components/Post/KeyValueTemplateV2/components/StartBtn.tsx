import { useTemplateContext } from '../useTemplateContext';
import Btn from './Btn';

export default function StartBtn({
  onNext,
  onTimeout,
}: {
  onNext: (timerId: number) => void;
  onTimeout: (message: string) => void;
}) {
  const { state } = useTemplateContext();
  if (state.status !== 'inited') return null;
  return (
    <Btn
      onClick={() => {
        const timerId = setTimeout(onTimeout, state.option.timeLimit);
        onNext(timerId);
      }}
    >
      시작
    </Btn>
  );
}
