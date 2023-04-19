import { useNavigate, useSearchParams } from 'react-router-dom';

import { GetPostsOptions } from '@api/getPosts';

export default function usePostsOption() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') || 'all';
  const order = searchParams.get('order') || 'newest';

  const option = { filter, order } as GetPostsOptions;

  const setFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    searchParams.set('filter', e.target.value);
    setSearchParams(searchParams);
    navigate({ pathname: '/', search: searchParams.toString() }, { replace: true });
  };

  const setOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    searchParams.set('order', e.target.value);
    setSearchParams(searchParams);
    navigate({ pathname: '/', search: searchParams.toString() }, { replace: true });
  };

  return {
    option,
    setFilter,
    setOrder,
  };
}
