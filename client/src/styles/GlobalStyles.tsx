import { Global, css } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        body {
          margin: 0;
          font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          -webkit-text-size-adjust: 100%;
        }

        li {
          list-style: none;
        }

        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
        }
      `}
    />
  );
};

export default GlobalStyles;
