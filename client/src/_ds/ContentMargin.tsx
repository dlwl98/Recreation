import { css } from '@emotion/react';
import styled from '@emotion/styled';

const ContentMargin = styled.span<{ size?: string }>`
  ${({ size = 0 }) => css`
    margin-left: ${size};
  `}
`;

export default ContentMargin;
