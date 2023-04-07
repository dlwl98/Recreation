import { css, cx } from '@emotion/css';

import defualtFlexStyles from '@styles/DefaultFlexStyles';

type Props = {
  align?: string;
  justify?: string;
  className?: string;
  children: React.ReactNode;
};

const Flex: React.FC<Props> = ({
  align = 'flex-start',
  justify = 'flex-start',
  className,
  children,
}) => {
  return (
    <div
      className={cx(
        defualtFlexStyles,
        css`
          align-items: ${align};
          justify-content: ${justify};
        `,
        className,
      )}
    >
      {children}
    </div>
  );
};
export default Flex;
