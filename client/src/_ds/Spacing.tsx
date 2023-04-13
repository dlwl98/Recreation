import { css } from '@emotion/css';

const Spacing = ({ size = 10 }) => {
  return (
    <div
      className={css`
        flex: none;
        height: ${size}px;
      `}
    ></div>
  );
};

export default Spacing;
