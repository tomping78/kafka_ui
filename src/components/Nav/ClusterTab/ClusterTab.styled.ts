import styled, { css } from 'styled-components';
import { ServerStatus } from 'generated-sources';

export const Wrapper = styled.li.attrs({ role: 'menuitem' })<{
  isOpen: boolean;
  clickedTitle?: string;
}>(
  ({ theme, isOpen, clickedTitle }) => css`
    font-size: 18px;
    font-weight: 500;
    user-select: none;
    /* border-radius: 50px; */

    display: grid;
    grid-template-columns: min-content min-content auto min-content;
    grid-template-areas: 'title status . chevron';
    gap: 0 5px;

    transition: all 0.1s ease-in-out;
    padding: 12px 25px;
    cursor: pointer;
    text-decoration: none;
    margin: 0;
    line-height: 20px;
    align-items: center;
    color: ${isOpen && clickedTitle !== 'Dashboard'
      ? theme.menu.color.white
      : theme.menu.color.backthree};
    background-color: ${isOpen && clickedTitle !== 'Dashboard'
      ? theme.menu.color.backthree
      : theme.menu.color.white};
    border-radius: ${isOpen && clickedTitle !== 'Dashboard' ? '50px' : '0'};
    border-top: ${isOpen && clickedTitle !== 'Dashboard'
      ? '0'
      : '1px solid #dedede'};

    /* &:hover {
      background-color: ${theme.menu.backgroundColor.hover};
      color: ${theme.menu.color.hover};
    } */
  `
);

export const Title = styled.div`
  grid-area: title;
  white-space: nowrap;
  max-width: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  /* text-transform: uppercase; */
  /* padding: 10px 20px; */
`;

export const StatusIconWrapper = styled.svg.attrs({
  viewBox: '0 0 4 4',
  xmlns: 'http://www.w3.org/2000/svg',
})`
  grid-area: status;
  fill: none;
  width: 5px;
  height: 5px;
  margin-left: 3px;
`;

export const StatusIcon = styled.circle.attrs({
  cx: 2,
  cy: 2,
  r: 2,
  role: 'status-circle',
})<{ status: ServerStatus }>(({ theme, status }) => {
  const statusColor: {
    [k in ServerStatus]: string;
  } = {
    [ServerStatus.ONLINE]: theme.menu.statusIconColor.online,
    [ServerStatus.OFFLINE]: theme.menu.statusIconColor.offline,
    [ServerStatus.INITIALIZING]: theme.menu.statusIconColor.initializing,
  };

  return css`
    fill: ${statusColor[status]};
  `;
});

export const ChevronWrapper = styled.svg.attrs({
  viewBox: '0 0 10 6',
  xmlns: 'http://www.w3.org/2000/svg',
})`
  grid-area: chevron;
  width: 10px;
  height: 6px;
  fill: none;
`;

type ChevronIconProps = { $open: boolean };

export const ChevronIcon = styled.path.attrs<ChevronIconProps>(({ $open }) => ({
  d: $open ? 'M8.99988 5L4.99988 1L0.999878 5' : 'M1 1L5 5L9 1',
}))<ChevronIconProps>`
  stroke: ${({ theme }) => theme.menu.chevronIconColor};
`;
