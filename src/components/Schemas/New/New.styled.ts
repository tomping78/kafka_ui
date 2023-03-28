import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  & > button {
    align-self: flex-start;
  }

  & textarea {
    height: 200px;
  }
  & select {
    width: 30%;
  }
`;
