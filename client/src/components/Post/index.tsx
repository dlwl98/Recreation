import { GetPostResponse } from '@api/getPost';

import Spacing from '@ds/Spacing';

import PostHeader from './PostHeader';

const Post = ({ data }: { data: GetPostResponse }) => {
  const { post, elements } = data;

  return (
    <div>
      <PostHeader post={post} />
      <Spacing size={40} />
      {elements.map((element, i) => (
        <div key={`element_${i}`}>
          <div>{i + 1}번</div>
          <div>문제: {element.quiz}</div>
          <div>정답: {element.answer}</div>
          <Spacing />
        </div>
      ))}
    </div>
  );
};

export default Post;
