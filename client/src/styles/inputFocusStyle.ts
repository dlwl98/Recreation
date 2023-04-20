import { css } from '@emotion/css';

import { theme } from '@styles/theme';

export const inputFocusStyle = css`
  :focus {
    border-color: ${theme.color.orange100};
  }
`;
