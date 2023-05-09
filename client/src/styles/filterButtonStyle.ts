import { css } from '@emotion/css';

import { GetPostsOptions } from '@api/getPosts';

import { theme } from './theme';

const filterButtonStyle = (option: GetPostsOptions, value: string) => {
  return css`
    margin-left: 10px;
    ${option.filter === value
      ? {
          backgroundColor: theme.color.orange700,
          color: 'white',
          border: `1px solid ${theme.color.orange700}`,
        }
      : {
          ':hover': { borderColor: theme.color.orange700 },
        }}
  `;
};

export default filterButtonStyle;
