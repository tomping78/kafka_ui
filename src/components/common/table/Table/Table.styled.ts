import styled from 'styled-components';

interface Props {
  isFullwidth?: boolean;
}

export const Table = styled.table<Props>`
  width: ${(props) => (props.isFullwidth ? '100%' : 'auto')};

  & th {
    padding: 15px 10px 15px 15px;
    border-top: 2px solid #333;
    border-bottom: 1px solid #333;
    vertical-align: middle;
    text-align: left;
    font-family: Titillium Web, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    color: #333;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    background: #faf1e2;
    white-space: nowrap;
    position: relative;

    &::after {
      content: '';
      width: 1px;
      height: 16px;
      background: #ccc;
      position: absolute;
      top: calc(50% - 8px);
      right: 0;
    }
    &:last-child::after {
      display: none;
    }
  }

  & td {
    color: ${({ theme }) => theme.table.td.color.normal};
    vertical-align: middle;
    max-width: 350px;
    word-wrap: break-word;
    border-bottom: 1px solid #dadada;
    font-size: 14px;
    font-weight: 400;
    padding: 13px 8px 13px 15px;
    line-height: 14px;
    vertical-align: middle;
    word-wrap: break-word;
    & div {
      line-height: 16px;
    }
    & div table th {
      border-top: 1px solid #dadada;
      border-bottom: 1px solid #dadada;
      background: #f5f5f5;
    }
  }

  & tbody > tr {
    &:nth-child(even) {
      background: #f8f8f8;
    }
    &:hover {
      background-color: ${({ theme }) => theme.table.tr.backgroundColor.hover};
    }
  }
`;
