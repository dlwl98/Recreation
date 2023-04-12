import { css } from '@emotion/css';
import { useContext } from 'react';

import { theme } from '@styles/theme';

import useLogin from '@hooks/useLogin';

import { ModalContext } from '@context/ModalContext';

import ContentMargin from '@ds/ContentMargin';
import Flex from '@ds/Flex';
import Input from '@ds/Input';
import Spacing from '@ds/Spacing';

const LoginForm: React.FC = () => {
  const { email, setEmail, password, setPassword, onSubmit } = useLogin();
  const { openModal } = useContext(ModalContext);

  return (
    <Flex<'form'> as="form" direction="column" onSubmit={onSubmit}>
      <label>이메일</label>
      <Spacing size={10} />
      <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

      <Spacing size={10} />
      <label>비밀번호</label>
      <Spacing size={10} />
      <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <Spacing size={20} />
      <div className={buttons}>
        <button className={buttonStyles} type="submit">
          로그인
        </button>
        <ContentMargin size="20px">
          <button className={buttonStyles} onClick={() => openModal('register-modal')}>
            가입하기
          </button>
        </ContentMargin>
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

export default LoginForm;
