import { css } from '@emotion/css';
import { Suspense } from 'react';
import { Navigate } from 'react-router-dom';

import ErrorBoundary from '@utils/ErrorBoundary';

import { theme } from '@styles/theme';

import usePostsOption from '@hooks/usePostsOption';

import MainLayout from '@layouts/MainLayout';

import AuthWrapper from '@components/AuthWrapper';
import Header from '@components/Header';
import SearchBar from '@components/SearchBar';
import SuspenseCards from '@components/SuspenseCards';
import PostsListData from '@components/data/PostsListData';
import Filters from '@components/main/Filters';
import Orders from '@components/main/Orders';
import WriteButton from '@components/main/WriteButton';

import Flex from '@ds/Flex';
import Spacing from '@ds/Spacing';

const MainPage = () => {
  const { option } = usePostsOption();

  return (
    <div>
      <Header shouldDisplayProfile={true} />
      <Spacing size={theme.spacing.belowHeader} />
      <MainLayout>
        <Filters />
        <Spacing />
        <SpaceBetweenFlex>
          <Orders />
          <MarginedFlex>
            <SearchBar />
            <AuthWrapper fallback={<AuthFallback />}>
              <WriteButton />
            </AuthWrapper>
          </MarginedFlex>
        </SpaceBetweenFlex>

        <ErrorBoundary fallback={<Navigate to="/error" />}>
          <Suspense fallback={<SuspenseCards size={20} />}>
            <PostsListData option={option} />
          </Suspense>
        </ErrorBoundary>
      </MainLayout>
    </div>
  );
};

const SpaceBetweenFlex = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
      align="center"
      justify="space-between"
      className={css`
        flex-wrap: wrap;
      `}
    >
      {children}
    </Flex>
  );
};

const MarginedFlex = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
      align="center"
      className={css`
        margin-left: 10px;
      `}
    >
      {children}
    </Flex>
  );
};

const AuthFallback = () => {
  return (
    <span
      className={css`
        margin-left: 10px;
      `}
    />
  );
};

export default MainPage;
