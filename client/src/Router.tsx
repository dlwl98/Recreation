import { Route, Routes } from 'react-router-dom';

import ModalRoute from '@utils/ModalRoute';

import ErrorPage from '@pages/ErrorPage';
import MainPage from '@pages/MainPage';
import SearchPage from '@pages/SearchPage';

const Router = () => {
  return (
    <Routes>
      <Route element={<ModalRoute />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
