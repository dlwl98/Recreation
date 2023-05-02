import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '@styles/GlobalStyles';

import { ModalContextProvider } from '@context/ModalContext';
import { UserContextProvider } from '@context/UserContext';

import App from './App';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

const prepareWorker = async () => {
  if (import.meta.env.MODE === 'development' || import.meta.env.MODE === 'production') {
    const { worker } = await import('./mocks/worker');
    worker.start();
  }
};

prepareWorker().then(() =>
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <ModalContextProvider>
            <GlobalStyles />
            <BrowserRouter>
              <Toaster />
              <App />
            </BrowserRouter>
          </ModalContextProvider>
        </UserContextProvider>
      </QueryClientProvider>
    </React.StrictMode>,
  ),
);
