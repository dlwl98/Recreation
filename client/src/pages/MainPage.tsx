import { css } from '@emotion/css';
import { useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';

import { categories, categoriesDisplayString } from '@custom-types/Categories';

import { theme } from '@styles/theme';

import { GetPostsOptions } from '@api/getPosts';

import { usePostsQuery } from '@hooks/usePostsQuery';

import MainLayout from '@layouts/MainLayout';

import Cards from '@components/Cards';
import Header from '@components/Header';

import Spacing from '@ds/Spacing';

const MainPage = () => {
  const [option, setOption] = useState<GetPostsOptions>({ filter: 'all', order: 'newest' });
  const { data, status } = usePostsQuery(option);

  const setFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOption({ ...option, filter: e.target.value as GetPostsOptions['filter'] });
  };

  const setOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOption({ ...option, order: e.target.value as GetPostsOptions['order'] });
  };

  return (
    <div>
      <Header shouldDisplaySearch={true} shouldDisplayProfile={true} />
      <Spacing size={theme.spacing.belowHeader} />
      <MainLayout>
        <select className={selectStyle} value={option.filter} onChange={setFilter}>
          <option value="all">전체</option>
          {categories.map((category, i) => (
            <option key={i} value={category}>
              {categoriesDisplayString[category]}
            </option>
          ))}
        </select>
        <select className={selectStyle} value={option.order} onChange={setOrder}>
          <option value="newest">최신순</option>
          <option value="popularity">인기순</option>
        </select>
        {status === 'success' ? <Cards width={400} cards={data.posts} /> : 'loading'}
      </MainLayout>
    </div>
  );
};

const selectStyle = css`
  border: 1px solid ${theme.color.gray700};
  border-radius: 5px;
  color: ${theme.color.gray700};
  font-size: 1rem;
  padding: 10px;
  width: 100px;
  margin-left: 10px;
`;

export default MainPage;
