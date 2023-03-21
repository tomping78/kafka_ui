import styled from 'styled-components';

export const Layout = styled.div`
  min-width: 1200px;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;

  @media screen and (max-width: 1023px) {
    min-width: initial;
  }
`;
