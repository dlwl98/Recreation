import { css } from '@emotion/css';
import { useContext } from 'react';

import { theme } from '@styles/theme';

import { ModalContext } from '@context/ModalContext';

import Icon from '@components/Icon';

import ContentMargin from '@ds/ContentMargin';

const ProfileIcon = () => {
  const { openedModal, openModal } = useContext(ModalContext);
  return (
    <>
      <ContentMargin size="5px" />
      <div
        className={css`
          cursor: pointer;
        `}
        onClick={() => openModal('profile-modal')}
      >
        <Icon
          name="person"
          fill={Number(!!openedModal)}
          size="2.5rem"
          border={`2px solid ${theme.color.gray100}`}
          color={theme.color.gray700}
        />
      </div>
    </>
  );
};

export default ProfileIcon;
