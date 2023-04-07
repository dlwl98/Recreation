import { css } from '@emotion/css';
import { useState } from 'react';

import { theme } from '@styles/theme';

import Flex from '@ds/Flex';
import Input from '@ds/Input';
import Spacing from '@ds/Spacing';

type Props = {
  onSubmit: (username: string, password: string, passwordConfirm: string) => void;
};

const RegisterForm: React.FC<Props> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(username, password, passwordConfirm);
  };

  return (
    <Flex<'form'> as="form" direction="column" onSubmit={handleSubmit}>
      <label>아이디</label>
      <Spacing size={10} />
      <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

      <Spacing size={10} />
      <label>비밀번호</label>
      <Spacing size={10} />
      <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <Spacing size={10} />
      <label>비밀번호 확인</label>
      <Spacing size={10} />
      <Input
        type="password"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />

      <Spacing size={20} />
      <div className={buttons}>
        <button className={buttonStyles} type="submit">
          회원가입
        </button>
      </div>
    </Flex>
  );
};

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
