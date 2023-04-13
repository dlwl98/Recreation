import { css } from '@emotion/css';

import { theme } from '@styles/theme';

import useRegister from '@hooks/useRegister';

import Button from '@ds/Button';
import Flex from '@ds/Flex';
import Input from '@ds/Input';
import Spacing from '@ds/Spacing';

const RegisterForm: React.FC = () => {
  const {
    inputs: { username, email, password, passwordConfirm },
    onChange,
    onSubmit,
  } = useRegister();

  return (
    <Flex<'form'> as="form" direction="column" onSubmit={onSubmit}>
      <label>닉네임</label>
      <Spacing size={10} />
      <Input type="text" name="username" value={username} onChange={onChange} />

      <Spacing size={10} />
      <label>이메일</label>
      <Spacing size={10} />
      <Input type="text" name="email" value={email} onChange={onChange} />

      <Spacing size={10} />
      <label>비밀번호</label>
      <Spacing size={10} />
      <Input
        type="password"
        name="password"
        value={password}
        placeholder="8~16자 영어, 숫자 필수"
        onChange={onChange}
      />

      <Spacing size={10} />
      <label>비밀번호 확인</label>
      <Spacing size={10} />
      <Input type="password" name="passwordConfirm" value={passwordConfirm} onChange={onChange} />

      <Spacing size={20} />
      <div className={buttons}>
        <Button color="white" border="none" backgroundColor={theme.color.gray700} type="submit">
          회원가입
        </Button>
      </div>
    </Flex>
  );
};

const buttons = css`
  margin: auto;
`;
export default RegisterForm;
