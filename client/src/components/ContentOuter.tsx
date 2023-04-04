import { css } from '@emotion/react';
import styled from '@emotion/styled';

type Props = {
  width?: string;
  children?: React.ReactNode;
};

const ContentOuter: React.FC<Props> = ({ width = 'auto', children }) => {
  return <Outer width={width}>{children}</Outer>;
};

const Outer = styled.div<Props>`
  ${({ width }) => css`
    width: ${width};
    display: flex;
    align-items: center;
    position: relative;
  `}
`;

export default ContentOuter;
