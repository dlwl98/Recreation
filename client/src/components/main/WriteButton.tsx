import { css } from '@emotion/css';
import { useNavigate } from 'react-router-dom';

import { theme } from '@styles/theme';

import Button from '@ds/Button';

const WriteButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      color={theme.color.orange700}
      border="none"
      className={css`
        margin-left: 10px;
        :hover {
          color: ${theme.color.orange100};
        }
      `}
      onClick={() => navigate('/write')}
    >
      글쓰기
    </Button>
  );
};

export default WriteButton;
