import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { ModalContext, ModalProps } from '@context/ModalContext';

import LoginModal from '@components/modal/LoginModal';
import ProfileModal from '@components/modal/ProfileModal';
import RegisterModal from '@components/modal/RegisterModal';

const ModalRoute = () => {
  const { openedModal, closeModal } = useContext(ModalContext);
  let CurrentModal: React.FC<ModalProps> | null;

  switch (openedModal) {
    case 'login-modal':
      CurrentModal = LoginModal;
      break;
    case 'register-modal':
      CurrentModal = RegisterModal;
      break;
    case 'profile-modal':
      CurrentModal = ProfileModal;
      break;
    default:
      CurrentModal = null;
  }

  return (
    <>
      {CurrentModal && <CurrentModal closeModal={closeModal} />}
      <Outlet />
    </>
  );
};

export default ModalRoute;
