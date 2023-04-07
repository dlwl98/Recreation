import { ModalProps } from '@context/ModalContext';

import LoginForm from '@components/form/LoginForm';
import LoginModalContent from '@components/modal/LoginModal/LoginModalContent';
import LoginModalOuter from '@components/modal/LoginModal/LoginModalOuter';

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
