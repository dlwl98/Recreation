import { Route, Routes } from 'react-router-dom';

import ModalRoute from '@utils/ModalRoute';

import ErrorPage from '@pages/ErrorPage';
import MainPage from '@pages/MainPage';
import PostPage from '@pages/PostPage';
import WritePage from '@pages/WritePage';

const Router = () => {
  return (
    <Routes>
      <Route element={<ModalRoute />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
