import { css, cx } from '@emotion/css';

type Props = {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
};

const ModalOuter: React.FC<Props> = ({ onClick, className, children }) => {
  return (
    <div
      onClick={onClick}
      className={cx(
        css`
          z-index: 1;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: flex-end;
        `,
        className,
      )}
    >
      {children}
    </div>
  );
};
export default ModalOuter;
