import { css } from '@emotion/react';
import { useContext } from 'react';

import { theme } from '@styles/theme';

import { ModalContext } from '@context/ModalContext';

import ContentMargin from '@components/ContentMargin';
import Icon from '@components/Icon';

const ProfileIcon = () => {
  const { openedModal, openModal } = useContext(ModalContext);
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
