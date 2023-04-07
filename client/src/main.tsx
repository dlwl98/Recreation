import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Navigate } from 'react-router-dom';

import ErrorBoundary from '@utils/ErrorBoundary';

import GlobalStyles from '@styles/GlobalStyles';

import { ModalContextProvider } from '@context/ModalContext';
import { UserContextProvider } from '@context/UserContext';

import App from './App';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <ModalContextProvider>
          <GlobalStyles />
          <BrowserRouter>
            <ErrorBoundary fallback={<Navigate replace to="/error" />}>
              <App />
            </ErrorBoundary>
          </BrowserRouter>
        </ModalContextProvider>
      </UserContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
