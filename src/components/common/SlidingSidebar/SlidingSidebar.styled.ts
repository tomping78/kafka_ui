import styled from 'styled-components';

export const Wrapper = styled.div<{ $open?: boolean }>(
  ({ theme, $open }) => `
  background-color: ${theme.layout.backgroundColor};
  position: fixed;
  top: ${theme.layout.navBarHeight};
  bottom: 0;
  width: 70vw;
  // padding:35px;
  right: calc(${$open ? '0px' : theme.layout.rightSidebarWidth} * -2);
  box-shadow: -1px 0px 30px 0px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease-in-out;
  z-index: 200;
  overflow-y:auto;
  display:flex;
  flex-direction:column;
  flex:1 1 auto;

  h2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #333;
    line-height:55px;
    margin:10px 35px 0 35px;
  }
`
);

export const Shadow = styled.div<{ $open?: boolean }>(
  ({ $open }) => `
  width: 100%;
  height: 100%;
  position: fixed;
  background: #111;
  opacity: ${$open ? '0.3' : '0'};
  display: ${$open ? 'block' : 'none'};
  transition: all 0.1s ease-in-out;
  top: 0;
  left: 0;
`
);

export const Content = styled.div<{ $open?: boolean }>(
  ({ theme }) => `
  background-color: ${theme.layout.backgroundColor};
  overflow-y: auto;
  position:relative;
  display:flex;
  flex-direction:column;
  flex:1 1 auto;
  // position: absolute;
  // top: 95px;
  // left: 0;
  // right: 0;
  
`
);
