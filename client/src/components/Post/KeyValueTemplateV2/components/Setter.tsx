import { useRef } from 'react';

import Flex from '@ds/Flex';
import Input from '@ds/Input';
import Spacing from '@ds/Spacing';

import { useTemplateContext } from '../useTemplateContext';
import Btn from './Btn';

export default function Setter({
  onClick,
}: {
  onClick: (deathCount: number, timeLimit: number) => void;
}) {
  const { state } = useTemplateContext();
  const deathCountRef = useRef<HTMLInputElement>(null);
  const secRef = useRef<HTMLInputElement>(null);

  if (state.status !== 'notinit') return null;

  return (
    <Flex direction="column" align="center">
      <Input type="number" placeholder="시도 가능 횟수(기본값: 1)" ref={deathCountRef} />
      <Spacing />
      <Input type="number" placeholder="설정 시간(기본값: 10초)" ref={secRef} />
      <Spacing />
      <Btn
        onClick={() => {
          const deathCount = Number(deathCountRef.current?.value) || 1;
          const timeLimit = Number(secRef.current?.value) * 1000 || 10000;
          onClick(deathCount, timeLimit);
        }}
      >
        설정완료
      </Btn>
    </Flex>
  );
}
