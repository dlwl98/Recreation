import { css } from '@emotion/css';

import { GetPostsOptions } from '@api/getPosts';

import { theme } from './theme';

const orderButtonStyle = (option: GetPostsOptions, value: string) => {
  return css`
    margin-left: 5px;
    ${option.order === value && {
      color: theme.color.orange700,
    }}
  `;
};

export default orderButtonStyle;
