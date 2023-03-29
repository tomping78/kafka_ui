import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  & > form {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  }
`;

export const Columns = styled.div`
  /* margin: -16px; */
  /* margin-bottom: 16px; */
  margin: 10px 0;

  @media screen and (min-width: 769px) {
    display: flex;
  }
`;

export const Column = styled.div`
  flex: 1 1 auto;
  padding: 0 8px;
`;
