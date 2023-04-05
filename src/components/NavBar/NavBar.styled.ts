import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import DiscordIcon from 'components/common/Icons/DiscordIcon';
import GitIcon from 'components/common/Icons/GitIcon';

export const Navbar = styled.nav(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border-bottom: 1px solid ${theme.layout.stuffBorderColor}; */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 30;
    background-color: ${theme.menu.backgroundColor.primary};
    min-height: 70px;
  `
);

export const NavbarBrand = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center !important;
  flex-shrink: 0;
  min-height: 3.25rem;
  padding-left: 35px;
`;

export const SocialLink = styled.a(
  ({ theme: { layout, icons } }) => css`
    display: block;
    font-size: 24px;
    color: rgb(255, 255, 255, 0.8);
    cursor: pointer;
    fill: ${layout.socialLink.color};

    &:hover {
      color: rgb(255, 255, 255, 1);
    }

    /* &:active {
      ${DiscordIcon} {
        fill: ${icons.discord.active};
      }

      ${GitIcon} {
        fill: ${icons.git.active};
      }
    } */
  `
);

export const NavbarSocial = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 35px;
`;

export const NavbarItem = styled.div`
  display: flex;
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: center;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
`;

export const NavbarBurger = styled.div(
  ({ theme }) => css`
    display: block;
    position: relative;
    cursor: pointer;
    height: 3.25rem;
    width: 3.25rem;
    margin-left: -15px;
    padding: 0;

    /* &:hover {
      background-color: ${theme.menu.backgroundColor.hover};
    } */

    @media screen and (min-width: 1024px) {
      display: none;
    }
  `
);

export const Span = styled.span(
  ({ theme }) => css`
    display: block;
    position: absolute;
    background: ${theme.menu.color.white};
    height: 1px;
    left: calc(50% - 8px);
    transform-origin: center;
    transition-duration: 86ms;
    transition-property: background-color, opacity, transform, -webkit-transform;
    transition-timing-function: ease-out;
    width: 16px;

    &:first-child {
      top: calc(50% - 6px);
    }

    &:nth-child(2) {
      top: calc(50% - 1px);
    }

    &:nth-child(3) {
      top: calc(50% + 4px);
    }
  `
);

export const Hyperlink = styled(Link)(
  ({ theme }) => css`
    position: relative;

    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    align-items: center;
    gap: 8px;

    margin: 0;
    padding: 0;

    font-family: Titillium Web, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 16px;
    color: ${theme.menu.color.white};
    &:hover {
      color: ${theme.menu.color.white};
    }
    text-decoration: none;
    word-break: break-word;
    cursor: pointer;
    span {
      font-weight: normal;
      font-size: 17px;
      color: #a2a2a2;
    }
  `
);
