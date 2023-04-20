import { useParams } from 'react-router-dom';

import { theme } from '@styles/theme';

import { usePostQuery } from '@hooks/usePostQuery';

import MainLayout from '@layouts/MainLayout';

import Header from '@components/Header';

import Spacing from '@ds/Spacing';

type PostPageParams = {
  id: string;
};

const PostPage = () => {
  const { id } = useParams() as PostPageParams;
  const { data, status } = usePostQuery({ id });

  return (
    <div>
      <Header shouldDisplayProfile={true} />
      <Spacing size={theme.spacing.belowHeader} />
      <MainLayout>
        {status === 'success' ? (
          <div>
            <div>{data.post.title}</div>
            <div>{data.post.detail}</div>
            <div>{data.post.hits}</div>
            <div>{data.post.likes}</div>
            <Spacing />
            {data.elements.map((element, i) => (
              <div key={`element_${i}`}>
                <div>{i + 1}번</div>
                <div>문제: {element.quiz}</div>
                <div>정답: {element.answer}</div>
                <Spacing />
              </div>
            ))}
          </div>
        ) : (
          <div>Loading</div>
        )}
      </MainLayout>
    </div>
  );
};

export default PostPage;
