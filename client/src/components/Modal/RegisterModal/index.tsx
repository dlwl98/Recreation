import { ModalProps } from '@context/ModalContext';

import RegisterForm from '@components/Form/RegisterForm';
import LoginModalContent from '@components/Modal/LoginModal/LoginModalContent';
import LoginModalOuter from '@components/Modal/LoginModal/LoginModalOuter';

const RegisterModal: React.FC<ModalProps> = ({ closeModal }) => {
  return (
    <LoginModalOuter onClick={closeModal}>
      <LoginModalContent onClick={(e) => e.stopPropagation()}>
        <RegisterForm onSubmit={console.log} />
      </LoginModalContent>
    </LoginModalOuter>
  );
};

export default RegisterModal;
