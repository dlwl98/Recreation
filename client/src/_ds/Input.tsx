import { css, cx } from '@emotion/css';
import { ComponentProps, forwardRef } from 'react';

import { theme } from '@styles/theme';

const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={cx(
          css`
            padding: 5px;
            height: 25px;
            outline: none;
            border: 1px solid ${theme.color.gray100};
            :focus {
              border: 1px solid ${theme.color.gray700};
            }
            &::placeholder {
              color: ${theme.color.gray100};
            }
          `,
          className,
        )}
      />
    );
  },
);

export default Input;
