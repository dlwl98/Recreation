import { css } from '@emotion/css';
import { Suspense, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import ErrorBoundary from '@utils/ErrorBoundary';

import { categories, categoriesDisplayString } from '@custom-types/Categories';

import { theme } from '@styles/theme';

import { GetPostsOptions } from '@api/getPosts';

import usePostsOption from '@hooks/usePostsOption';

import { UserContext } from '@context/UserContext';

import MainLayout from '@layouts/MainLayout';

import Header from '@components/Header';
import SearchBar from '@components/SearchBar';
import SuspenseCards from '@components/SuspenseCards';
import PostsListData from '@components/data/PostsListData';

import Button from '@ds/Button';
import Flex from '@ds/Flex';
import Spacing from '@ds/Spacing';

const MainPage = () => {
  const { option, setFilter, setOrder } = usePostsOption();
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(UserContext);

  return (
    <div>
      <Header shouldDisplayProfile={true} />
      <Spacing size={theme.spacing.belowHeader} />
      <MainLayout>
        <Flex align="center">
          <Button
            color={theme.color.gray700}
            border={`1px solid ${theme.color.gray700}`}
            value="all"
            onClick={setFilter}
            className={filterButtonStyle(option, 'all')}
          >
            전체
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              value={category}
              color={theme.color.gray700}
              border={`1px solid ${theme.color.gray700}`}
              onClick={setFilter}
              className={filterButtonStyle(option, category)}
            >
              {categoriesDisplayString[category]}
            </Button>
          ))}
        </Flex>
        <Spacing />
        <Flex align="center" justify="space-between">
          <Flex align="center">
            <Button
              color={theme.color.gray700}
              border="none"
              value="newest"
              onClick={setOrder}
              className={orderButtonStyle(option, 'newest')}
            >
              최신순
            </Button>
            <Button
              color={theme.color.gray700}
              border="none"
              value="popularity"
              onClick={setOrder}
              className={orderButtonStyle(option, 'popularity')}
            >
              인기순
            </Button>
          </Flex>
          <Flex align="center">
            <SearchBar />
            {isLoggedIn ? (
              <Button
                color={theme.color.orange700}
                border="none"
                className={marginRight10px}
                onClick={() => navigate('/write')}
              >
                글쓰기
              </Button>
            ) : (
              <span className={marginRight10px} />
            )}
          </Flex>
        </Flex>
        <Suspense fallback={<SuspenseCards />}>
          <ErrorBoundary fallback={<Navigate to="/error" />}>
            <PostsListData option={option} />
          </ErrorBoundary>
        </Suspense>
      </MainLayout>
    </div>
  );
};

const marginRight10px = css`
  margin-right: 10px;
`;

const filterButtonStyle = (option: GetPostsOptions, value: string) => {
  return css`
    margin-left: 10px;
    ${option.filter === value && {
      backgroundColor: theme.color.orange700,
      color: 'white',
      border: `1px solid ${theme.color.orange700}`,
    }}
  `;
};

const orderButtonStyle = (option: GetPostsOptions, value: string) => {
  return css`
    margin-left: 5px;
    ${option.order === value && {
      color: theme.color.orange700,
    }}
  `;
};

export default MainPage;
