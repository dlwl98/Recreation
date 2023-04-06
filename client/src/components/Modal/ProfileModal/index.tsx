import { ModalProps } from '@context/ModalContext';

import ModalOuter from '@components/Modal/ModalOuter';
import ProfileModalContent from '@components/Modal/ProfileModal/ProfileModalContent';

const ProfileModal: React.FC<ModalProps> = ({ closeModal }) => {
  return (
    <ModalOuter onClick={closeModal}>
      <ProfileModalContent onClick={(e) => e.stopPropagation()}></ProfileModalContent>
    </ModalOuter>
  );
};

export default ProfileModal;
