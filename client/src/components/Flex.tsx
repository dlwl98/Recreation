import { css, cx } from '@emotion/css';
import { ComponentProps } from 'react';

type Props = {
  align?: string;
  justify?: string;
  className?: string;
  children: React.ReactNode;
};

const Flex: React.FC<Props & ComponentProps<'div'>> = ({
  align = 'flex-start',
  justify = 'flex-start',
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cx(
        css`
          display: flex;
          align-items: ${align};
          justify-content: ${justify};
        `,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
export default Flex;
