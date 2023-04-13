import { Link } from 'react-router-dom';

import { theme } from '@styles/theme';

import Icon from '@components/Icon';

import ContentMargin from '@ds/ContentMargin';

const SearchIcon = () => {
  return (
    <>
      <ContentMargin size="5px" />
      <Link to={'/search'}>
        <Icon
          name="search"
          fill={0}
          size="2.5rem"
          border={`2px solid ${theme.color.gray100}`}
          color={theme.color.gray700}
        />
      </Link>
    </>
  );
};

export default SearchIcon;
