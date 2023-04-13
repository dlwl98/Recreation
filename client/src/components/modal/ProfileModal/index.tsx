import { css } from '@emotion/css';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ModalProps } from '@context/ModalContext';
import { UserContext } from '@context/UserContext';

import ModalOuter from '@components/modal/ModalOuter';
import ProfileModalContent from '@components/modal/ProfileModal/ProfileModalContent';

const ProfileModal: React.FC<ModalProps> = ({ closeModal }) => {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <ModalOuter
      onClick={closeModal}
      className={css`
        justify-content: flex-end;
      `}
    >
      <ProfileModalContent onClick={(e) => e.stopPropagation()}>
        <div
          onClick={() => {
            closeModal();
            logout();
            navigate('/');
          }}
        >
          로그아웃
        </div>
      </ProfileModalContent>
    </ModalOuter>
  );
};

export default ProfileModal;
