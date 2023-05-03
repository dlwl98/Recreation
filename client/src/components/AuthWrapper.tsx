import { useContext } from 'react';

import { UserContext } from '@context/UserContext';

const AuthWrapper = ({
  fallback,
  children,
}: {
  fallback: React.ReactNode;
  children: React.ReactNode;
}) => {
  const { isLoggedIn } = useContext(UserContext);

  if (!isLoggedIn) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default AuthWrapper;
