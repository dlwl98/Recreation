import { useNavigate, useSearchParams } from 'react-router-dom';

import { GetPostsOptions } from '@api/getPosts';

export default function usePostsOption() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') || 'all';
  const order = searchParams.get('order') || 'newest';
  const search = searchParams.get('search') || '';

  const option = { filter, order, search } as GetPostsOptions;

  const setFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    searchParams.set('filter', target.value);
    setSearchParams(searchParams);
    navigate({ pathname: '/', search: searchParams.toString() }, { replace: true });
  };

  const setOrder = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    searchParams.set('order', target.value);
    setSearchParams(searchParams);
    navigate({ pathname: '/', search: searchParams.toString() }, { replace: true });
  };

  const setSearch = (inputString: string) => {
    searchParams.set('search', inputString);
    setSearchParams(searchParams);
    navigate({ pathname: '/', search: searchParams.toString() }, { replace: true });
  };

  return {
    option,
    setFilter,
    setOrder,
    setSearch,
  };
}
