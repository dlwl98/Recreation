import { css } from '@emotion/react';

import ModalOuter from '../ModalOuter';

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

const LoginModalOuter: React.FC<Props> = ({ onClick, children }) => {
  return (
    <ModalOuter
      onClick={onClick}
      css={css`
        background-color: rgba(0, 0, 0, 0.5);
        justify-content: center;
        align-items: center;
      `}
    >
      {children}
    </ModalOuter>
  );
};

export default LoginModalOuter;
