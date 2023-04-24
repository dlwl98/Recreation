import { css } from '@emotion/css';
import { useContext } from 'react';

import { ReactComponent as PersonIcon } from '@assets/person.svg';
import { ReactComponent as PersonFillIcon } from '@assets/person_fill.svg';

import { theme } from '@styles/theme';

import { ModalContext } from '@context/ModalContext';

import ContentMargin from '@ds/ContentMargin';
import Flex from '@ds/Flex';

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
        <Flex
          align="center"
          className={css`
            border: 2px solid ${theme.color.gray100};
            border-radius: 10px;
          `}
        >
          {openedModal === '' ? (
            <PersonIcon width="2.5rem" height="2.5rem" fill={theme.color.gray700} />
          ) : (
            <PersonFillIcon width="2.5rem" height="2.5rem" fill={theme.color.gray700} />
          )}
        </Flex>
      </div>
    </>
  );
};

export default ProfileIcon;
