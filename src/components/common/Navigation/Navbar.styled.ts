import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  border-bottom: 1px ${({ theme }) => theme.primaryTab.borderColor.nav} solid;
  height: ${({ theme }) => theme.primaryTab.height};
  margin-bottom: 20px;

  & a:last-child {
    border-right: 1px solid #dedede;
  }
  & a {
    height: 40px;
    min-width: 100px;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    white-space: nowrap;
    color: #bababa;
    border: 1px solid #dedede;
    border-right: 0;
    border-bottom: 0;
    background: #f5f5f5;

    &.is-active {
      border: 1px ${(props) => props.theme.primaryTab.borderColor.active} solid;
      border-bottom: 2px ${(props) => props.theme.primaryTab.borderColor.active}
        solid;
      color: ${(props) => props.theme.primaryTab.color.active};
      font-weight: 600;
      background: #fff;
    }
    &.is-disabled {
      color: ${(props) => props.theme.primaryTab.color.disabled};
      border-bottom: 1px ${(props) => props.theme.primaryTab.borderColor.normal};
      cursor: not-allowed;
    }
    /* &:hover:not(.is-active, .is-disabled) {
      border-bottom: 1px ${(props) => props.theme.primaryTab.borderColor.hover}
        solid;
      color: ${(props) => props.theme.primaryTab.color.hover};
    } */
  }
`;

export default Navbar;
