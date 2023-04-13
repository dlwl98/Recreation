import { css, cx } from '@emotion/css';

type Props = {
  name: string;
  fill: number;
  size: string;
  color: string;
  border?: string;
  className?: string;
};

const Icon: React.FC<Props> = ({ name, fill, size, color, border = 'none', className }) => {
  return (
    <span
      className={cx(
        'material-symbols-outlined',
        css`
          font-variation-settings: 'FILL' ${fill}, 'wght' 400, 'GRAD' 0;
          font-size: ${size};
          color: ${color};
          border: ${border};
          border-radius: 10px;
        `,
        className,
      )}
    >
      {name}
    </span>
  );
};

export default Icon;
