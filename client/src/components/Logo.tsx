import { css, cx } from '@emotion/css';

import { ReactComponent as Svg } from '@assets/logo.svg';

type Props = {
  width: number;
  height: number;
  color: string;
  className?: string;
};

const Logo: React.FC<Props> = ({ width, height, color, className }) => {
  return (
    <Svg
      width={width}
      height={height}
      className={cx(
        css`
          g {
            fill: ${color};
          }
        `,
        className,
      )}
    ></Svg>
  );
};

export default Logo;
