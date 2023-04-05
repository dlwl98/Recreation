import { useContext } from 'react';

import { ModalContext } from '@context/ModalContext';

import ModalOuter from '@components/Modal/ModalOuter';
import ProfileModalContent from '@components/Modal/ProfileModal/ProfileModalContent';

const ProfileModal: React.FC = () => {
  const { isModalOpen, closeModal } = useContext(ModalContext);

  if (isModalOpen !== 'profile-modal') {
    return null;
  }

  return (
    <ModalOuter onClick={closeModal}>
      <ProfileModalContent onClick={(e) => e.stopPropagation()}></ProfileModalContent>
    </ModalOuter>
  );
};

export default ProfileModal;
