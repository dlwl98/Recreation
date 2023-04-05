import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '@styles/GlobalStyles';

import { ModalContextProvider } from '@context/ModalContext';
import { UserContextProvider } from '@context/UserContext';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserContextProvider>
      <ModalContextProvider>
        <GlobalStyles />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
);
