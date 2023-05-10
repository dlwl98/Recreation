import { useTemplateContext } from '../useTemplateContext';
import Btn from './Btn';

export default function RestartBtn({ onClick }: { onClick: () => void }) {
  const { keyValues, state } = useTemplateContext();
  if (state.cursor < keyValues.length) return null;
  return <Btn onClick={onClick}>다시시작</Btn>;
}
