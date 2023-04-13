import { createContext, useState } from 'react';

type OpenedModal = '' | 'login-modal' | 'register-modal' | 'profile-modal';

export type ModalProps = {
  closeModal: () => void;
};

export type ModalContextType = {
  openedModal: OpenedModal;
  openModal: (modalName: OpenedModal) => void;
  closeModal: () => void;
};

export const ModalContext = createContext<ModalContextType>({
  openedModal: '',
  openModal: () => {},
  closeModal: () => {},
});

type ModalProviderProps = {
  children: React.ReactNode;
};

export const ModalContextProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [openedModal, setOpenedModal] = useState<OpenedModal>('');

  const openModal = (modalName: OpenedModal) => setOpenedModal(modalName);
  const closeModal = () => setOpenedModal('');

  return (
    <ModalContext.Provider value={{ openedModal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
