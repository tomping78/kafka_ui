import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.viewer.wrapper};
  padding: 15px 20px;
  display: flex;
  flex: 1 1 auto;
`;
