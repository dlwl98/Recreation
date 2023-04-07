import { css, cx } from '@emotion/css';
import { CSSProperties, ComponentProps, ElementType } from 'react';

type Props<T extends ElementType> = {
  as?: T;
  direction?: CSSProperties['flexDirection'];
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  className?: string;
  children: React.ReactNode;
};

const defaultElement = 'div';

type FlexProps<T extends ElementType = typeof defaultElement> = Props<T> & ComponentProps<T>;

function Flex<T extends ElementType>({
  as = 'div',
  direction = 'row',
  align = 'flex-start',
  justify = 'flex-start',
  className,
  children,
  ...props
}: FlexProps<T>) {
  const Component = as;
  return (
    <Component
      className={cx(
        css`
          display: flex;
          flex-direction: ${direction};
          align-items: ${align};
          justify-content: ${justify};
        `,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
export default Flex;
