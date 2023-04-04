import { css } from '@emotion/react';

type Props = {
  name: string;
  fill: number;
  size: string;
  color: string;
  border?: string;
};

const Icon: React.FC<Props> = ({ name, fill, size, color, border = 'none' }) => {
  return (
    <span
      className="material-symbols-outlined"
      css={css`
        font-variation-settings: 'FILL' ${fill}, 'wght' 400, 'GRAD' 0;
        font-size: ${size};
        color: ${color};
        border: ${border};
        border-radius: 10px;
      `}
    >
      {name}
    </span>
  );
};

export default Icon;
