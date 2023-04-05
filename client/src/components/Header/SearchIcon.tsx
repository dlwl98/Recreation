import { Link } from 'react-router-dom';

import { theme } from '@styles/theme';

import ContentMargin from '@components/ContentMargin';
import Icon from '@components/Icon';

const SearchIcon = () => {
  return (
    <>
      <ContentMargin size="5px" />
      <Link to={'/search'}>
        <Icon
          name="search"
          fill={0}
          size="2.5rem"
          border={`2px solid ${theme.color.gray0}`}
          color={theme.color.gray1}
        />
      </Link>
    </>
  );
};

export default SearchIcon;
