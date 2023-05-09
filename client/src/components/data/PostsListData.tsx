import { useEffect, useState } from 'react';

import { GetPostsOptions, Post } from '@api/getPosts';

import { usePostsQuery } from '@hooks/usePostsQuery';
import useResize from '@hooks/useResize';
import useScroll from '@hooks/useScroll';

import Cards from '@components/Cards';
import SuspenseCards from '@components/SuspenseCards';

const PostsListData = ({ option }: { option: GetPostsOptions }) => {
  const width = 400;
  const [standard, setStandard] = useState(Math.floor(window.innerWidth / width));
  const { data, isFetchingNextPage, hasNextPage, fetchNextPage } = usePostsQuery({
    ...option,
    size: standard * 10,
  });

  const handleResize = () => {
    setStandard(Math.floor(window.innerWidth / width));
  };
  useResize(handleResize);

  const handleInfiniteScroll = () => {
    const { scrollHeight, scrollTop } = document.documentElement;
    const { innerHeight } = window;
    if (hasNextPage && !isFetchingNextPage && scrollHeight - innerHeight * 2 <= scrollTop) {
      fetchNextPage();
    }
  };
  useScroll(handleInfiniteScroll);

  return (
    <>
      {data!.pages.map((page) => (
        <Cards key={`cards-${page.nextPage}`} standard={standard} cards={page.posts} />
      ))}
      {isFetchingNextPage && <SuspenseCards size={standard * 10} />}
    </>
  );
};

export default PostsListData;
