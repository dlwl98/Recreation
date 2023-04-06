import { css } from '@emotion/react';
import { useContext, useState } from 'react';

import { theme } from '@styles/theme';

import { ModalContext } from '@context/ModalContext';

import ContentMargin from '@components/ContentMargin';
import Spacing from '@components/Spacing';

type Props = {
  onSubmit: (username: string, password: string) => void;
};

const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  const { openModal } = useContext(ModalContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      css={formStyles}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(username, password);
      }}
    >
      <label>아이디</label>
      <Spacing size={10} />
      <input
        css={inputStyles}
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Spacing size={10} />
      <label>비밀번호</label>
      <Spacing size={10} />
      <input
        css={inputStyles}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Spacing size={20} />
      <div css={buttons}>
        <button css={buttonStyles} type="submit">
          로그인
        </button>
        <ContentMargin size="20px">
          <button css={buttonStyles} onClick={() => openModal('register-modal')}>
            가입하기
          </button>
        </ContentMargin>
      </div>
    </form>
  );
};

const formStyles = css`
  display: flex;
  flex-direction: column;
`;

const inputStyles = css`
  padding: 5px;
  height: 25px;
  border: 1px solid ${theme.color.gray0};
  :focus {
    outline: 1px solid ${theme.color.gray1};
  }
`;

const buttons = css`
  margin: auto;
`;

const buttonStyles = css`
  padding: 10px;
  background-color: ${theme.color.gray1};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default LoginForm;
