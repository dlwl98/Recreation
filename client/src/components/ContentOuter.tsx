import { css } from '@emotion/css';

import Flex from '@components/Flex';

type Props = {
  width?: string;
  children?: React.ReactNode;
};

const ContentOuter: React.FC<Props> = ({ width = 'auto', children }) => {
  return (
    <Flex
      className={css`
        width: ${width};
      `}
    >
      {children}
    </Flex>
  );
};

export default ContentOuter;
