import { useTemplateContext } from '../useTemplateContext';

export default function SuccessResult({ children }: { children: React.ReactNode }) {
  const { state } = useTemplateContext();
  if (state.status !== 'pausedSuccess') return null;
  return <div>정답{children}</div>;
}
