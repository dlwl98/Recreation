import { css } from '@emotion/css';
import { useContext } from 'react';

import { theme } from '@styles/theme';

import { UserContext } from '@context/UserContext';

import LoginIcon from '@components/Header/LoginIcon';
import LogoIcon from '@components/Header/LogoIcon';
import ProfileIcon from '@components/Header/ProfileIcon';

import Flex from '@ds/Flex';

type Props = {
  shouldDisplayProfile: boolean;
};

const Header: React.FC<Props> = ({ shouldDisplayProfile }) => {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <div className={outer}>
      <Flex align="center" justify="space-between" className={inner}>
        <Flex>
          <LogoIcon />
        </Flex>

        <Flex>{shouldDisplayProfile ? isLoggedIn ? <ProfileIcon /> : <LoginIcon /> : <></>}</Flex>
      </Flex>
    </div>
  );
};

const outer = css`
  height: 4rem;
  border-bottom: 2px solid ${theme.color.gray100};
`;

const inner = css`
  margin: auto;
  width: calc(90% - 2rem);
  height: 100%;
  @media (max-width: 1024px) {
    width: calc(100% - 2rem);
  }
`;

export default Header;
