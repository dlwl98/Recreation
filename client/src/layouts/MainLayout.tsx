import styled from '@emotion/styled';

const MainLayout = styled.div`
  margin: auto;
  width: calc(90% - 2rem);
  @media (max-width: 1024px) {
    width: calc(100% - 2rem);
  }
`;

export default MainLayout;
