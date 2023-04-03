import styled from 'styled-components';

export const Column = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  margin-bottom: 16px;
`;

export const NameField = styled.div`
  flex-grow: 1;
`;

export const CustomParamsHeading = styled.h3`
  font-weight: 600;
  font-size: 22px;
  color: #333;
`;

export const Label = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  & > span {
    font-size: 15px;
    font-weight: 600;
    color: ${({ theme }) => theme.topicFormLabel.color};
  }
`;

export const Button = styled.button<{ isActive: boolean }>`
  background-color: ${({ theme, ...props }) =>
    props.isActive ? theme.button.secondary.invertedColors.normal : '#ccc'};
  //   '#333'
  // : '#ccc'};
  color: ${({ theme, ...props }) =>
    props.isActive
      ? theme.button.secondary.isActiveColor
      : theme.button.primary.color};
  height: 24px;
  padding: 0 10px;
  min-width: 51px;
  border: none;
  border-radius: 1px;
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
  justify-content: right;
`;
