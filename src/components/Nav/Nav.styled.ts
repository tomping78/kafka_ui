import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const List = styled.ul.attrs({ role: 'menu' })`
  padding-bottom: 4px;

  & > li {
    /* background: #333;
    color: #fff;
    border-radius: 50px; */
  }
  & > li > a {
    font-size: 21px;
    color: #333;
    position: relative;
    padding-left: 25px;
  }
  & > li > a.active {
    background: #333;
    border-radius: 50px;
    color: #fff;
  }
  & > ul > li {
    background: #fff;
    border-radius: 50px;
    padding: 0 20px;
  }
  & > ul > li > a {
    color: #aaa;
    font-size: 18px;
    background: none !important;
    padding: 10px 25px;
    padding-left: 15px;
    position: relative;

    border-bottom: 1px solid #dedede;
  }
  & > ul > li > a.active {
    color: #333;
    font-weight: 600;
    border-radius: 0 !important;
  }
  & > ul > li > a.active::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 20px;
    background: #187fde;
    position: absolute;
    left: 0;
    top: 17px;
  }
`;

export const Link = styled(NavLink)(
  ({ theme }) => css`
    width: 100%;
    padding: 15px 25px;
    cursor: pointer;
    text-decoration: none;
    margin: 0 0;
    /* font-size: 16px; */
    /* background-color: ${theme.menu.backgroundColor.normal};
    color: ${theme.menu.color.normal}; */

    /* &:hover {
      background-color: ${theme.menu.backgroundColor.hover};
      color: ${theme.menu.color.hover};
    } */
    /* &.active {
      background-color: ${theme.menu.backgroundColor.active};
      color: ${theme.menu.color.active};
    } */
  `
);

export const ListItem = styled('li').attrs({ role: 'menuitem' })<{
  $isTopLevel?: boolean;
}>`
  font-size: 21px;
  font-weight: ${({ $isTopLevel }) => ($isTopLevel ? 500 : 'normal')};
  /* height: 32px; */
  display: flex;
  user-select: none;
`;
