import { categories, categoriesDisplayString } from '@custom-types/Categories';

import filterButtonStyle from '@styles/filterButtonStyle';
import { theme } from '@styles/theme';

import usePostsOption from '@hooks/usePostsOption';

import Button from '@ds/Button';
import Flex from '@ds/Flex';

const Filters = () => {
  const { setFilter, option } = usePostsOption();

  return (
    <Flex align="center">
      <Button
        color={theme.color.gray700}
        border={`1px solid ${theme.color.gray700}`}
        value="all"
        onClick={setFilter}
        className={filterButtonStyle(option, 'all')}
      >
        전체
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          value={category}
          color={theme.color.gray700}
          border={`1px solid ${theme.color.gray700}`}
          onClick={setFilter}
          className={filterButtonStyle(option, category)}
        >
          {categoriesDisplayString[category]}
        </Button>
      ))}
    </Flex>
  );
};

export default Filters;
