import { ModalProps } from '@context/ModalContext';

import RegisterForm from '@components/form/RegisterForm';
import LoginModalContent from '@components/modal/LoginModal/LoginModalContent';
import LoginModalOuter from '@components/modal/LoginModal/LoginModalOuter';

const RegisterModal: React.FC<ModalProps> = ({ closeModal }) => {
  return (
    <LoginModalOuter onClick={closeModal}>
      <LoginModalContent onClick={(e) => e.stopPropagation()}>
        <RegisterForm />
      </LoginModalContent>
    </LoginModalOuter>
  );
};

export default RegisterModal;
