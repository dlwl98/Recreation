import { css } from '@emotion/css';
import { useState } from 'react';

import { theme } from '@styles/theme';

import usePostsOption from '@hooks/usePostsOption';

import Icon from '@components/Icon';

import ContentMargin from '@ds/ContentMargin';
import Flex from '@ds/Flex';
import Input from '@ds/Input';

const SearchBar = () => {
  const [inputString, setInputString] = useState('');
  const { setSearch } = usePostsOption();

  return (
    <div>
      <Flex align="center" justify="space-between">
        <Input value={inputString} onChange={(e) => setInputString(e.target.value)} />
        <ContentMargin size="5px" />
        <div className={searchButtonStyle} onClick={() => setSearch(inputString)}>
          <Icon name="search" fill={0} size="2rem" color={theme.color.gray700} />
        </div>
      </Flex>
    </div>
  );
};

const searchButtonStyle = css`
  cursor: pointer;
`;

export default SearchBar;
