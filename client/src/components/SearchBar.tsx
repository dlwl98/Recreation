import styled from '@emotion/styled';

import { theme } from '@styles/theme';

import ContentMargin from '@components/ContentMargin';
import ContentOuter from '@components/ContentOuter';
import Icon from '@components/Icon';

const SearchBar = () => {
  return (
    <Outer>
      <Inner>
        <ContentOuter width="100%">
          <ContentMargin size="5px" />
          <Input />

          <ContentMargin size="5px" />
          <Icon name="search" fill={0} size="2.2rem" color={theme.color.black} />

          <ContentMargin size="5px" />
        </ContentOuter>
      </Inner>
    </Outer>
  );
};

const Outer = styled.div`
  height: 3rem;
  @media (max-width: 768px) {
    height: 2rem;
  }
`;

const Inner = styled.div`
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid ${theme.color.gray700};
  border-radius: 5px;
  max-width: 1000px;
`;

const Input = styled.input`
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
