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
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: right;
`;
