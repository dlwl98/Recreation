import { css } from '@emotion/css';
import { useState } from 'react';

import { ReactComponent as SearchIcon } from '@assets/search.svg';

import { inputFocusStyle } from '@styles/inputFocusStyle';
import { theme } from '@styles/theme';

import usePostsOption from '@hooks/usePostsOption';

import ContentMargin from '@ds/ContentMargin';
import Flex from '@ds/Flex';
import Input from '@ds/Input';

const SearchBar = () => {
  const { option, setSearch } = usePostsOption();
  const [inputString, setInputString] = useState(option.search);

  return (
    <div>
      <Flex align="center" justify="space-between">
        <Input
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
          className={inputFocusStyle}
        />
        <ContentMargin size="5px" />
        <div className={searchButtonStyle} onClick={() => setSearch(inputString)}>
          <SearchIcon width="2rem" height="2rem" fill={theme.color.gray700} />
        </div>
      </Flex>
    </div>
  );
};

const searchButtonStyle = css`
  cursor: pointer;
`;

export default SearchBar;
