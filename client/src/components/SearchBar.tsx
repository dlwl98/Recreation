import { css } from '@emotion/css';

import { theme } from '@styles/theme';

import ContentMargin from '@components/ContentMargin';
import ContentOuter from '@components/ContentOuter';
import Flex from '@components/Flex';
import Icon from '@components/Icon';

const SearchBar = () => {
  return (
    <div className={outer}>
      <Flex align="center" justify="space-between" className={inner}>
        <ContentOuter width="100%">
          <ContentMargin size="5px" />
          <input className={input} />

          <ContentMargin size="5px" />
          <Icon name="search" fill={0} size="2.2rem" color={theme.color.black} />

          <ContentMargin size="5px" />
        </ContentOuter>
      </Flex>
    </div>
  );
};

const outer = css`
  height: 3rem;
  @media (max-width: 768px) {
    height: 2rem;
  }
`;

const inner = css`
  margin: auto;
  height: 100%;
  border: 2px solid ${theme.color.gray700};
  border-radius: 5px;
  max-width: 1000px;
`;

const input = css`
  all: unset;
  width: 100%;
  height: 2rem;
  font-size: ${theme.fontSize.lg};
  @media (max-width: 768px) {
    height: 1.7rem;
    font-size: ${theme.fontSize.md};
  }
`;

export default SearchBar;
