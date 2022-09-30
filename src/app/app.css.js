import { css as _css } from '@emotion/react';

export const css = {
  main: _css`
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  step: _css`
    width: 100%;
    margin: 1rem 0;
  `,

  suggestedMessage: _css`
    width: 490px;
    height: 300px;
    border: 1px solid black;
    position: relative;

    textarea {
      width: 100%;
      height: 100%;
    }

    .copy-message-btn {
      position: absolute;
      right: 5px;
      bottom: 5px;
    }
  `,

  writeToThemIframe: _css`
    width: 100%;
    height: 500px;
  `,
};
