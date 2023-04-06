import { ModalProps } from '@context/ModalContext';

import LoginForm from '@components/Form/LoginForm';
import LoginModalContent from '@components/Modal/LoginModal/LoginModalContent';
import LoginModalOuter from '@components/Modal/LoginModal/LoginModalOuter';

const LoginModal: React.FC<ModalProps> = ({ closeModal }) => {
  return (
    <LoginModalOuter onClick={closeModal}>
      <LoginModalContent onClick={(e) => e.stopPropagation()}>
        <LoginForm onSubmit={console.log} />
      </LoginModalContent>
    </LoginModalOuter>
  );
};

export default LoginModal;
