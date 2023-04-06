import styled from '@emotion/styled';
import { useContext } from 'react';

import { theme } from '@styles/theme';

import { UserContext } from '@context/UserContext';

import ContentOuter from '@components/ContentOuter';
import LoginIcon from '@components/Header/LoginIcon';
import LogoIcon from '@components/Header/LogoIcon';
import ProfileIcon from '@components/Header/ProfileIcon';
import SearchIcon from '@components/Header/SearchIcon';

type Props = {
  shouldDisplaySearch: boolean;
  shouldDisplayProfile: boolean;
};

const Header: React.FC<Props> = ({ shouldDisplaySearch, shouldDisplayProfile }) => {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <Outer>
      <Inner>
        <ContentOuter>
          <LogoIcon />
        </ContentOuter>

        <ContentOuter>
          {shouldDisplaySearch ? <SearchIcon /> : <></>}
          {shouldDisplayProfile ? isLoggedIn ? <ProfileIcon /> : <LoginIcon /> : <></>}
        </ContentOuter>
      </Inner>
    </Outer>
  );
};

const Outer = styled.div`
  height: 4rem;
  border-bottom: 2px solid ${theme.color.gray100};
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

export default Header;
