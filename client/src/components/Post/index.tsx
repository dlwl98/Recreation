import { GetPostResponse } from '@api/getPost';

import PostHeader from '@components/Post/PostHeader';
import { categoriesTotemplates } from '@components/Post/categoriesToTemplates';

import Spacing from '@ds/Spacing';

const Post = ({ data }: { data: GetPostResponse }) => {
  const { post, elements } = data;
  const { category } = post;
  const Template = categoriesTotemplates[category];

  return (
    <div>
      <PostHeader post={post} />
      <Spacing size={100} />
      <Template category={category} elements={elements} />
    </div>
  );
};

export default Post;
