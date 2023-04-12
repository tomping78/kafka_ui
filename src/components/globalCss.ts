import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle(
  ({ theme }) => css`
    html {
      font-family: 'Titillium Web', sans-serif, 'Noto Sans KR';
      font-size: 14px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: ${theme.layout.backgroundColor};
      overflow-x: hidden;
      overflow-y: scroll;
      text-rendering: optimizeLegibility;
      text-size-adjust: 100%;
      min-width: 300px;
      display: flex;
      height: 100%;
    }

    #root,
    body {
      width: 100%;
      position: relative;
      margin: 0;
      font-family: 'Titillium Web', sans-serif, 'Noto Sans KR';
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      background: #f2f3f6;
    }

    article,
    aside,
    figure,
    footer,
    header,
    hgroup,
    section {
      display: block;
    }

    body,
    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit;
    }

    code,
    pre {
      font-family: 'Roboto Mono', sans-serif;
      -moz-osx-font-smoothing: auto;
      -webkit-font-smoothing: auto;
      background-color: ${theme.code.backgroundColor};
      color: ${theme.code.color};
      font-size: 12px;
      font-weight: 400;
      padding: 2px 8px;
      border-radius: 5px;
      width: fit-content;
    }

    pre {
      overflow-x: auto;
      white-space: pre;
      word-wrap: normal;

      code {
        background-color: transparent;
        color: currentColor;
        padding: 0;
      }
    }

    a {
      color: ${theme.link.color};
      cursor: pointer;
      text-decoration: none;
      &:hover {
        color: ${theme.link.hoverColor};
      }
    }

    img {
      height: auto;
      max-width: 100%;
    }

    input[type='checkbox'],
    input[type='radio'] {
      vertical-align: baseline;
    }

    hr {
      background-color: ${theme.hr.backgroundColor};
      border: none;
      display: block;
      height: 1px;
      margin: 0;
    }

    fieldset {
      border: none;
    }

    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    /* scroll */
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-thumb {
      height: 30%;
      background: rgba(59, 59, 59, 0.2);
      border-radius: 20px;
      &:hover {
        background: rgba(59, 59, 59, 0.35);
      }
    }

    ::-webkit-scrollbar-track {
      background: rgba(59, 59, 59, 0.2);
      border-radius: 20px;
    }
    /* antd variation */
    .ant-card-head {
      background: #ececec !important;
      min-height: 50px !important;
    }
    .ant-card-head-title {
      font-size: 16px !important;
    }
    .ace_variable {
      color: #e12324 !important;
    }
    .ace_string {
      color: #237800 !important;
    }
    .ant-divider-dashed {
      border-color: rgba(5, 5, 5, 0.15);
    }
    .ant-divider-horizontal {
      margin: 15px 0 !important;
    }
    .ant-tooltip {
      max-width: 550px;
    }
    .ant-tooltip .ant-tooltip-inner {
      padding: 20px;
    }
    .ant-spin-lg .ant-spin-dot {
      font-size: 55px;
    }
    .ant-spin-lg .ant-spin-dot i {
      width: 25px;
      height: 25px;
    }
  `
);
