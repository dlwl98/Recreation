import { createContext, useState } from 'react';

export type ModalContextType = {
  isModalOpen: string;
  openModal: (modalName: string) => void;
  closeModal: () => void;
};

export const ModalContext = createContext<ModalContextType>({
  isModalOpen: '',
  openModal: () => {},
  closeModal: () => {},
});

type ModalProviderProps = {
  children: React.ReactNode;
};

export const ModalContextProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState('');

  const openModal = (modalName: string) => setIsModalOpen(modalName);
  const closeModal = () => setIsModalOpen('');

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
