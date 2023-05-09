import orderButtonStyle from '@styles/orderButtonStyle';
import { theme } from '@styles/theme';

import usePostsOption from '@hooks/usePostsOption';

import Button from '@ds/Button';
import Flex from '@ds/Flex';

const Orders = () => {
  const { setOrder, option } = usePostsOption();

  return (
    <Flex align="center">
      <Button
        color={theme.color.gray700}
        border="none"
        value="newest"
        onClick={setOrder}
        className={orderButtonStyle(option, 'newest')}
      >
        최신순
      </Button>
      <Button
        color={theme.color.gray700}
        border="none"
        value="popularity"
        onClick={setOrder}
        className={orderButtonStyle(option, 'popularity')}
      >
        인기순
      </Button>
    </Flex>
  );
};

export default Orders;
