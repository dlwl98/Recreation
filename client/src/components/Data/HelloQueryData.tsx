import { useHelloQuery } from '@api/getHello';

const HelloQueryData = () => {
  const { data } = useHelloQuery({ param: 'asd' });

  return <div>{data}</div>;
};

export default HelloQueryData;
