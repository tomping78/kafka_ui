import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Breadcrumbs = styled.div`
  display: flex;
  align-items: baseline;
`;

export const BackLink = styled(NavLink)`
  color: ${({ theme }) => theme.pageHeading.backLink.color.normal};
  position: relative;
  font-size: 18px;

  &:hover {
    ${({ theme }) => theme.pageHeading.backLink.color.hover};
  }

  &::after {
    content: '';
    position: absolute;
    left: -11px;
    bottom: 2px;
    border-left: 1px solid ${({ theme }) => theme.pageHeading.dividerColor};
    height: 20px;
    transform: rotate(14deg);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  border-bottom: 1px solid #585858;

  & > div {
    display: flex;
    gap: 5px;
  }

  & > ${Breadcrumbs} {
    gap: 20px;
  }
  & > div > h1 {
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 32px;
      width: 22px;
      height: 5px;
      border-radius: 20px;
      background: #187fde;
    }
  }
`;
