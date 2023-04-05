import { css } from '@emotion/react';
import { useContext } from 'react';

import { theme } from '@styles/theme';

import { ModalContext } from '@context/ModalContext';

import ContentMargin from '@components/ContentMargin';
import LoginModal from '@components/Modal/LoginModal';
import RegisterModal from '@components/Modal/RegisterModal';

const LoginIcon = () => {
  const { openModal } = useContext(ModalContext);
  return (
    <>
      <ContentMargin size="5px" />
      <div
        onClick={() => openModal('login-modal')}
        css={css`
          color: ${theme.color.gray1};
          border: 2px solid ${theme.color.gray0};
          border-radius: 10px;
          padding: 9px;
          font-weight: 600;
          max-height: 2rem;
          font-size: 1.1rem;
        `}
      >
        로그인
      </div>
      <LoginModal />
      <RegisterModal />
    </>
  );
};

export default LoginIcon;
