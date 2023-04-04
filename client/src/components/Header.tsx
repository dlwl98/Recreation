import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { theme } from '@styles/theme';

import ContentMargin from '@components/ContentMargin';
import ContentOuter from '@components/ContentOuter';
import Icon from '@components/Icon';
import Logo from '@components/Logo';

type Props = {
  shouldDisplaySearch: boolean;
  shouldDisplayProfile: boolean;
};

const Header: React.FC<Props> = ({ shouldDisplaySearch, shouldDisplayProfile }) => {
  return (
    <Outer>
      <Inner>
        <ContentOuter>
          <LogoContent />
        </ContentOuter>

        <ContentOuter>
          {shouldDisplaySearch ? <SearchIcon /> : <></>}
          {shouldDisplayProfile ? <ProfileIcon /> : <></>}
        </ContentOuter>
      </Inner>
    </Outer>
  );
};

const Outer = styled.div`
  height: 4rem;
  border-bottom: 2px solid ${theme.color.gray0};
`;

const Inner = styled.div`
  margin: auto;
  width: calc(90% - 2rem);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1024px) {
    width: calc(100% - 2rem);
  }
`;

const LogoContent = () => {
  return (
    <Link to={'/'}>
      <Logo width={theme.logo.lg.width} height={theme.logo.lg.height} color={theme.color.black} />
    </Link>
  );
};

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

const ProfileIcon = () => {
  return (
    <>
      <ContentMargin size="5px" />
      <Link to={'/'}>
        <Icon
          name="person"
          fill={0}
          size="2.5rem"
          border={`2px solid ${theme.color.gray0}`}
          color={theme.color.gray1}
        />
      </Link>
    </>
  );
};

export default Header;
