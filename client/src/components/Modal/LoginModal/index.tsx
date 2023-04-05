import { useContext } from 'react';

import { ModalContext } from '@context/ModalContext';

import LoginForm from '@components/Form/LoginForm';
import LoginModalContent from '@components/Modal/LoginModal/LoginModalContent';
import LoginModalOuter from '@components/Modal/LoginModal/LoginModalOuter';

const LoginModal: React.FC = () => {
  const { isModalOpen, closeModal } = useContext(ModalContext);

  if (isModalOpen !== 'login-modal') {
    return null;
  }

  return (
    <LoginModalOuter onClick={closeModal}>
      <LoginModalContent onClick={(e) => e.stopPropagation()}>
        <LoginForm onSubmit={console.log} />
      </LoginModalContent>
    </LoginModalOuter>
  );
};

export default LoginModal;
