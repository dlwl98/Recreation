import { useHelloQuery } from '@api/getHello';

const HelloQueryData = () => {
  const { data } = useHelloQuery({ param: 'asd' });

  return <div>{data?.imkey}</div>;
};

export default HelloQueryData;
