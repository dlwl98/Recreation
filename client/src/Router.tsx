import { Route, Routes } from 'react-router-dom';

import ErrorPage from '@pages/ErrorPage';
import MainPage from '@pages/MainPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
