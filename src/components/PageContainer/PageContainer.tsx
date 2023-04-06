import React, { PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from 'components/NavBar/NavBar';
import * as S from 'components/PageContainer/PageContainer.styled';
import Nav from 'components/Nav/Nav';
import useBoolean from 'lib/hooks/useBoolean';
import styled from 'styled-components';

const ContainerWrap = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;
const PageContainer: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  const {
    value: isSidebarVisible,
    toggle,
    setFalse: closeSidebar,
  } = useBoolean(false);
  const location = useLocation();

  React.useEffect(() => {
    closeSidebar();
  }, [location, closeSidebar]);

  return (
    <>
      <NavBar onBurgerClick={toggle} />
      <S.Container>
        <S.Sidebar aria-label="Sidebar" $visible={isSidebarVisible}>
          <Nav />
        </S.Sidebar>
        <S.Overlay
          $visible={isSidebarVisible}
          onClick={closeSidebar}
          onKeyDown={closeSidebar}
          tabIndex={-1}
          aria-hidden="true"
          aria-label="Overlay"
        />
        <ContainerWrap>{children}</ContainerWrap>
      </S.Container>
    </>
  );
};

export default PageContainer;
