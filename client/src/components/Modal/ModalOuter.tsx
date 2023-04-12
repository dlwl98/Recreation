import { css, cx } from '@emotion/css';

import Flex from '@ds/Flex';

type Props = {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
};

const ModalOuter: React.FC<Props> = ({ onClick, className, children }) => {
  return (
    <Flex
      onClick={onClick}
      className={cx(
        css`
          z-index: 1;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        `,
        className,
      )}
    >
      {children}
    </Flex>
  );
};
export default ModalOuter;
