import { css } from '@emotion/react';
import { useContext } from 'react';

import { theme } from '@styles/theme';

import { ModalContext } from '@context/ModalContext';

import ContentMargin from '@components/ContentMargin';
import Icon from '@components/Icon';
import LoginModal from '@components/Modal/ProfileModal';

const ProfileIcon = () => {
  const { isModalOpen, openModal } = useContext(ModalContext);
  return (
    <>
      <ContentMargin size="5px" />
      <div
        css={css`
          cursor: pointer;
        `}
        onClick={() => openModal('profile-modal')}
      >
        <Icon
          name="person"
          fill={Number(!!isModalOpen)}
          size="2.5rem"
          border={`2px solid ${theme.color.gray0}`}
          color={theme.color.gray1}
        />
      </div>
      <LoginModal />
    </>
  );
};

export default ProfileIcon;
