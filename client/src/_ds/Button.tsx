import { css, cx } from '@emotion/css';
import { CSSProperties, ComponentProps } from 'react';

type Props = {
  backgroundColor?: CSSProperties['backgroundColor'];
  padding?: CSSProperties['padding'];
  color: CSSProperties['color'];
  border: CSSProperties['border'];
  children: React.ReactNode;
};

type ButtonProps = Props & ComponentProps<'button'>;

const Button: React.FC<ButtonProps> = ({
  backgroundColor = 'white',
  padding = '10px',
  color,
  border,
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cx(
        css`
          color: ${color};
          border: ${border};
          background-color: ${backgroundColor};
          border-radius: 10px;
          padding: ${padding};
          font-weight: 600;
          cursor: pointer;
        `,
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
