import styled from '@emotion/styled';

const PostLayout = styled.div`
  margin: auto;
  width: calc(90% - 2rem);
  max-width: 1024px;
  @media (max-width: 1024px) {
    width: calc(100% - 2rem);
  }
`;

export default PostLayout;
