import { css } from '@emotion/react';

const Spacing = ({ size = 10 }) => {
  return (
    <div
      css={css`
        flex: none;
        height: ${size}px;
      `}
    ></div>
  );
};

export default Spacing;
