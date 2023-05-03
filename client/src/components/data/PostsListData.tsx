import { useEffect } from 'react';

import { GetPostsOptions } from '@api/getPosts';

import { usePostsQuery } from '@hooks/usePostsQuery';

import Cards from '@components/Cards';
import SuspenseCards from '@components/SuspenseCards';

const PostsListData = ({ option }: { option: GetPostsOptions }) => {
  const { data, isFetchingNextPage, fetchNextPage } = usePostsQuery(option);

  const handleInfiniteScroll = () => {
    const { scrollHeight, scrollTop } = document.documentElement;
    const { innerHeight } = window;
    if (!isFetchingNextPage && scrollHeight - innerHeight * 2 <= scrollTop) fetchNextPage();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleInfiniteScroll);
    return () => {
      window.removeEventListener('scroll', handleInfiniteScroll);
    };
  }, [handleInfiniteScroll]);

  return (
    <>
      {data!.pages.map((page) => (
        <Cards key={`cards-${page.nextPage}`} width={400} cards={page.posts} />
      ))}
      {isFetchingNextPage && <SuspenseCards />}
    </>
  );
};

export default PostsListData;
