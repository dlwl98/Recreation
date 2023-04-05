import styled from '@emotion/styled';

import { theme } from '@styles/theme';

const ProfileModalContent = styled.div`
  margin-top: 3.5rem;
  margin-right: calc(5% + 1rem);
  width: 12rem;
  max-height: 20rem;
  background-color: white;
  padding: 20px;
  border: 2px solid ${theme.color.gray0};
  border-radius: 5px;
  @media (max-width: 1024px) {
    margin-right: 1rem;
  }
`;

export default ProfileModalContent;
