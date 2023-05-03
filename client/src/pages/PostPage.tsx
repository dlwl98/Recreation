import { Suspense } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import ErrorBoundary from '@utils/ErrorBoundary';

import { theme } from '@styles/theme';

import PostLayout from '@layouts/PostLayout';

import Header from '@components/Header';
import Post from '@components/Post';
import PostData from '@components/data/PostData';

import Spacing from '@ds/Spacing';

type PostPageParams = {
  id: string;
};

const PostPage = () => {
  const { id } = useParams();

  return (
    <div>
      <Header shouldDisplayProfile={true} />
      <Spacing size={theme.spacing.belowHeader} />
      <PostLayout>
        <ErrorBoundary fallback={<Navigate to="/error" />}>
          <Suspense fallback={<div />}>
            <PostData id={id!} component={Post} />
          </Suspense>
        </ErrorBoundary>
      </PostLayout>
    </div>
  );
};

export default PostPage;
