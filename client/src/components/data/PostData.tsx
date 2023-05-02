import { GetPostResponse } from '@api/getPost';

import { usePostQuery } from '@hooks/usePostQuery';

type PostQueryPropComponent = {
  data: GetPostResponse;
};

const PostData = ({
  id,
  component,
}: {
  id: string;
  component: React.FC<PostQueryPropComponent>;
}) => {
  const { data } = usePostQuery({ id });
  const Component = component;

  return <Component data={data as GetPostResponse}></Component>;
};

export default PostData;
