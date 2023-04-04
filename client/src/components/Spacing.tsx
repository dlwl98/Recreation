import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Spacing = styled.div<{ size: number }>`
  ${({ size }) => css`
    flex: none;
    height: ${size}px;
  `}
`;

export default Spacing;
