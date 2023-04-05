/* eslint-disable prettier/prettier */
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const List = styled.ul.attrs({ role: 'menu' })<{
  clickedTitle?: string;
}>`
  /* padding-bottom: 4px; */
  border-top: 1px solid #e5e5e5;
  transition: all 0.3s ease-in-out;
  &:first-child {
    border-top: none;
  }

  & > li {
    /* background: #333;
    color: #fff;
    border-radius: 50px; */
  }
  & > li > a {
    font-size: 18px;
    color: #333;
    position: relative;
    padding-left: 25px;
  }
  & > li > a.active {
    /* background: #333; */
    background: ${({ clickedTitle }) =>
      clickedTitle === 'Dashboard' ? '#333' : '#fff'};
    border-radius: 50px;
    /* color: #fff; */
    color: ${({ clickedTitle }) =>
      clickedTitle === 'Dashboard' ? '#fff' : '#333'};
  }
  & > ul {
    border-top: none;
  }
  & > ul > li {
    background: #fff;
    border-radius: 50px;
    padding: 0 20px;
  }
  & > ul > li > a {
    color: #aaa;
    font-size: 15px;
    background: none !important;
    padding: 10px 10px 10px 20px;
    position: relative;
    border-bottom: 1px solid #e5e5e5;
  }
  & > ul > li:last-child > a {
    border-bottom: 0;
  }
  & > ul > li > a.active {
    color: #333;
    font-weight: 600;
    border-radius: 0 !important;
  }
  & > ul > li > a.active::before {
    content: '';
    width: 8px;
    height: 3px;
    border-radius: 20px;
    background: #187fde;
    position: absolute;
    left: 3px;
    top: 19px;
    transition: all 0.3s ease-in-out;
  }
`;

export const Link = styled(NavLink)(
  ({ theme }) => css`
    width: 100%;
    padding: 12px 25px;
    cursor: pointer;
    text-decoration: none;
    margin: 0 0;
    transition: all 0.1s ease-in-out;
    font-size: 16px;
    background-color: ${theme.menu.backgroundColor.normal};
    color: ${theme.menu.color.normal};

    &:hover {
      background-color: ${theme.menu.backgroundColor.hover};
      color: ${theme.menu.color.hover};
    }
    &.active {
      background-color: ${theme.menu.backgroundColor.active};
      color: ${theme.menu.color.active};
    }
  `
);

export const ListItem = styled('li').attrs({ role: 'menuitem' })<{
  $isTopLevel?: boolean;
}>`
  font-size: 18px;
  font-weight: ${({ $isTopLevel }) => ($isTopLevel ? 500 : 'normal')};
  /* height: 32px; */
  display: flex;
  user-select: none;
`;
