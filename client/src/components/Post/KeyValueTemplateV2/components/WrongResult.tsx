import { useTemplateContext } from '../useTemplateContext';

export default function WrongResult({ children }: { children: React.ReactNode }) {
  const { state } = useTemplateContext();
  if (state.status !== 'pausedWrong') return null;
  return (
    <div>
      오답! 정답은 {state.message}
      {children}
    </div>
  );
}
