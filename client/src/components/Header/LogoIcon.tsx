import { Link } from 'react-router-dom';

import { theme } from '@styles/theme';

import Logo from '@components/Logo';

const LogoIcon = () => {
  return (
    <Link to={'/'}>
      <Logo width={theme.logo.lg.width} height={theme.logo.lg.height} color={theme.color.black} />
    </Link>
  );
};

export default LogoIcon;
