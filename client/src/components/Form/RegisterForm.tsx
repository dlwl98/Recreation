import { css } from '@emotion/react';
import { useContext, useState } from 'react';

import { theme } from '@styles/theme';

import { ModalContext } from '@context/ModalContext';

import Spacing from '@components/Spacing';

type Props = {
  onSubmit: (username: string, password: string) => void;
};

const RegisterForm: React.FC<Props> = ({ onSubmit }) => {
  const { openModal } = useContext(ModalContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
    <form css={formStyles} onSubmit={handleSubmit}>
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

      <Spacing size={10} />
      <label>비밀번호 확인</label>
      <Spacing size={10} />
      <input
        css={inputStyles}
        type="password"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />

      <Spacing size={20} />
      <div css={buttons}>
        <button css={buttonStyles} type="submit">
          회원가입
        </button>
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
  border: 1px solid ${theme.color.gray100};
  :focus {
    outline: 1px solid ${theme.color.gray700};
  }
`;

const buttons = css`
  margin: auto;
`;

const buttonStyles = css`
  padding: 10px;
  background-color: ${theme.color.gray700};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default RegisterForm;
