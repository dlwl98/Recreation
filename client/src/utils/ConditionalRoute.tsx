import { Navigate, Outlet } from 'react-router-dom';

type Props = {
  condition: boolean;
};

const ConditionalRoute: React.FC<Props> = ({ condition }) => {
  if (!condition) return <Navigate replace to="/" />;
  return <Outlet />;
};

export default ConditionalRoute;
