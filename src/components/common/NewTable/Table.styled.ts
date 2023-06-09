import styled, { css } from 'styled-components';

export const ExpaderButton = styled.svg<{ $disabled: boolean }>(
  ({ theme: { table }, $disabled }) => css`
    & > path {
      fill: ${table.expander[$disabled ? 'disabled' : 'normal']};
    }

    &:hover > path {
      fill: ${table.expander[$disabled ? 'disabled' : 'hover']};
    }
  `
);

interface ThProps {
  sortable?: boolean;
  sortOrder?: 'desc' | 'asc' | false;
  expander?: boolean;
}

const sortableMixin = (normalColor: string, hoverColor: string) => `
  cursor: pointer;
  padding-left: 14px;
  position: relative;

  &::before,
  &::after {
    border: 4px solid transparent;
    content: '';
    display: block;
    height: 0;
    left: 0px;
    top: 50%;
    position: absolute;
  }
  &::before {
    border-bottom-color: ${normalColor};
    margin-top: -9px;
  }
  &::after {
    border-top-color: ${normalColor};
    margin-top: 1px;
  }
  &:hover {
    color: ${hoverColor};
  }
`;

const ASCMixin = (color: string) => `
  color: ${color};
  &:before {
    border-bottom-color: ${color};
  }
  &:after {
    border-top-color: rgba(0, 0, 0, 0.1);
  }
`;
const DESCMixin = (color: string) => `
  color: ${color};
  &:before {
    border-bottom-color: rgba(0, 0, 0, 0.1);
  }
  &:after {
    border-top-color: ${color};
  }
`;

export const Th = styled.th<ThProps>(
  ({
    theme: {
      table: { th },
    },
    sortable,
    sortOrder,
    expander,
  }) => `
  padding: 13px 10px 13px 15px;
  border-top:2px solid #333;
  border-bottom: 1px solid #333;
  vertical-align: middle;
  text-align: left;
  font-family: Titillium Web, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  color:#333;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  background: #FAF1E2;
  width: ${expander ? '5px' : 'auto'};
  white-space: nowrap;
  position:relative;

  &::after {
    content:'';
    width:1px;
    height:16px;
    background:#ccc;
    position:absolute;
    top:calc(50% - 8px);
    right:0;
  }
  &:last-child::after {display:none;}

  & > div {
    cursor: default;
    color: #333;
    ${sortable ? sortableMixin(th.color.sortable, th.color.hover) : ''}
    ${sortable && sortOrder === 'asc' && ASCMixin(th.color.active)}
    ${sortable && sortOrder === 'desc' && DESCMixin(th.color.active)}
  }
  & > div > div {
    display:flex;
    align-items: center;
  }
`
);

interface RowProps {
  clickable?: boolean;
  expanded?: boolean;
}

export const Row = styled.tr<RowProps>(
  ({ theme: { table }, expanded, clickable }) => `
  cursor: ${clickable ? 'pointer' : 'default'};
  background-color: ${table.tr.backgroundColor[expanded ? 'hover' : 'normal']};
  transition: all 0.2s ease-in-out;
  &:nth-child(even) {
    background:#f8f8f8;
  }
  &:hover {
    background-color: ${table.tr.backgroundColor.hover};
  }
`
);

export const ExpandedRowInfo = styled.div`
  background-color: ${({ theme }) => theme.table.tr.backgroundColor.normal};
  padding: 24px;
  border-radius: 8px;
  margin: 0 8px 8px 0;
`;

export const Nowrap = styled.div`
  white-space: nowrap;
`;

export const TableActionsBar = styled.div`
  padding: 0;
  background-color: ${({ theme }) => theme.table.actionBar.backgroundColor};
  margin: 0 0 16px 0;
  display: flex;
  gap: 5px;
`;

export const Table = styled.table(
  ({ theme: { table } }) => `
  width: 100%;

  td {
    border-bottom: 1px solid #dadada;
    font-size: 14px;
    font-weight: 400;
    padding: 12px 8px 12px 15px;
    line-height:14px;
    color: ${table.td.color.normal};
    vertical-align: middle;
    word-wrap: break-word;
    & div {
      line-height:16px;
    }

    & a {
      color: ${table.link.color.normal};
      font-weight: 500;
      max-width: 450px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: block;

      &:hover {
        color: ${table.link.color.hover};
      }

      &:active {
        color: ${table.link.color.active};
      }
    }
    & div table th {
      border-top:none;
    }
  }
`
);

export const EmptyTableMessageCell = styled.td`
  padding: 16px;
  text-align: center;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0 0 0;
  line-height: 32px;
`;

export const Pages = styled.div`
  display: flex;
  justify-content: left;
  white-space: nowrap;
  flex-wrap: nowrap;
  gap: 8px;
`;

export const GoToPage = styled.label`
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  margin-left: 8px;
`;

export const PageInfo = styled.div`
  display: flex;
  justify-content: right;
  gap: 8px;
  font-size: 14px;
  flex-wrap: nowrap;
  white-space: nowrap;
  border: 1px solid #dedede;
  border-radius: 5px;
  padding: 0 15px;
  & span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > span {
      margin-right: 15px;
    }
    & > i {
      font-style: normal;
      font-weight: 600;
      padding-left: 5px;
    }
  }
`;

export const Ellipsis = styled.div`
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  border-bottom: 1px solid #aaa;
`;
