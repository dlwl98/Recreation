import { css } from '@emotion/react';

import { ReactComponent as Svg } from '@assets/logo.svg';

type Props = {
  width: number;
  height: number;
  color: string;
};

const Logo: React.FC<Props> = ({ width, height, color }) => {
  const style = css`
    g {
      fill: ${color};
    }
  `;
  return <Svg width={width} height={height} css={style}></Svg>;
};

export default Logo;
