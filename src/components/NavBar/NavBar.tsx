import React from 'react';
import Logo from 'components/common/Logo/Logo';
import Version from 'components/Version/Version';
import { GitlabOutlined, LogoutOutlined } from '@ant-design/icons';

import * as S from './NavBar.styled';
import UserInfo from './UserInfo/UserInfo';

interface Props {
  onBurgerClick: () => void;
}

const NavBar: React.FC<Props> = ({ onBurgerClick }) => {
  return (
    <S.Navbar role="navigation" aria-label="Page Header">
      <S.NavbarBrand>
        <S.NavbarBurger
          onClick={onBurgerClick}
          onKeyDown={onBurgerClick}
          role="button"
          tabIndex={0}
          aria-label="burger"
        >
          <S.Span role="separator" />
          <S.Span role="separator" />
          <S.Span role="separator" />
        </S.NavbarBurger>

        <S.Hyperlink to="/">
          <Logo />
          TCVK <span>/ Apache kafka /</span>
        </S.Hyperlink>

        <S.NavbarItem>
          <Version />
        </S.NavbarItem>
      </S.NavbarBrand>
      <S.NavbarSocial>
        <S.SocialLink
          href="https://github.com/provectus/kafka-ui"
          target="_blank"
        >
          <GitlabOutlined />
        </S.SocialLink>
        <S.SocialLink
          href="https://discord.com/invite/4DWzD7pGE5"
          target="_blank"
        >
          <LogoutOutlined />
        </S.SocialLink>
        <UserInfo />
      </S.NavbarSocial>
    </S.Navbar>
  );
};

export default NavBar;
