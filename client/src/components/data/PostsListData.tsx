import { GetPostsOptions } from '@api/getPosts';

import { usePostsQuery } from '@hooks/usePostsQuery';

import Cards from '@components/Cards';

const PostsListData = ({ option }: { option: GetPostsOptions }) => {
  const { data } = usePostsQuery(option);

  return <Cards width={400} cards={data!.posts} />;
};

export default PostsListData;
