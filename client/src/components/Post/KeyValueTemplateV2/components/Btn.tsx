import { css } from '@emotion/css';

import { theme } from '@styles/theme';

import Button from '@ds/Button';

export default function Btn({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Button
      color={theme.color.gray700}
      border={`1px solid ${theme.color.gray700}`}
      onClick={onClick}
      className={css`
        :hover {
          border-color: ${theme.color.orange700};
        }
      `}
    >
      {children}
    </Button>
  );
}
