import { css } from '@emotion/css';

import { theme } from '@styles/theme';

import Icon from '@components/Icon';

import ContentMargin from '@ds/ContentMargin';
import Flex from '@ds/Flex';
import Input from '@ds/Input';

const SearchBar = () => {
  return (
    <div className={outer}>
      <Flex align="center" justify="space-between" className={inner}>
        <ContentMargin size="5px" />
        <Input className={input} />

        <ContentMargin size="5px" />
        <Icon name="search" fill={0} size="2.2rem" color={theme.color.black} />

        <ContentMargin size="5px" />
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
  width: 100%;
  border: none;
  :focus {
    border: none;
  }
  font-size: ${theme.fontSize.lg};
  @media (max-width: 768px) {
    height: 1.2rem;
    font-size: ${theme.fontSize.md};
  }
`;

export default SearchBar;
