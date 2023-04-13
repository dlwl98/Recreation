import { css } from '@emotion/css';
import { useContext } from 'react';

import { theme } from '@styles/theme';

import { ModalContext } from '@context/ModalContext';

import Button from '@ds/Button';
import ContentMargin from '@ds/ContentMargin';

const LoginIcon = () => {
  const { openModal } = useContext(ModalContext);
  return (
    <>
      <ContentMargin size="5px" />
      <Button
        color={theme.color.gray700}
        border={`2px solid ${theme.color.gray100}`}
        padding="9px"
        onClick={() => openModal('login-modal')}
        className={css`
          font-size: 1.1rem;
        `}
      >
        로그인
      </Button>
    </>
  );
};

export default LoginIcon;
