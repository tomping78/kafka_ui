/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

export interface ButtonProps {
  buttonType:
    | 'primary'
    | 'secondary'
    | 'modal_close'
    | 'modal_full'
    | 'modal_full_secon';
  buttonSize: 'S' | 'M' | 'L' | 'F';
  isInverted?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) =>
    props.buttonSize === 'S'
      ? 'center'
      : props.buttonSize === 'F'
      ? 'center'
      : 'space-between'};
  padding: ${(props) =>
    props.buttonType === 'modal_full' ? '20px 15px' : '8px 15px'};
  min-width: ${(props) =>
    props.buttonSize === 'L'
      ? '120px'
      : props.buttonSize === 'F'
      ? 'auto'
      : '75px'};
  border: none;
  border-radius: ${(props) => (props.buttonSize === 'M' ? '5px' : '0px')};
  white-space: nowrap;
  box-sizing: border-box;
  line-height: 100%;

  background: ${(props) =>
    props.isInverted
      ? 'transparent'
      : props.theme.button[props.buttonType].backgroundColor.normal};
  color: ${(props) =>
    props.isInverted
      ? props.theme.button[props.buttonType].invertedColors.normal
      : props.theme.button[props.buttonType].color};
  font-size: ${(props) => props.theme.button.fontSize[props.buttonSize]};
  font-weight: 500;
  height: ${(props) => props.theme.button.height[props.buttonSize]};

  &:hover:enabled {
    background: ${(props) =>
      props.isInverted
        ? 'transparent'
        : props.theme.button[props.buttonType].backgroundColor.hover};
    color: ${(props) =>
      props.isInverted
        ? props.theme.button[props.buttonType].invertedColors.hover
        : props.theme.button[props.buttonType].color};
    cursor: pointer;
  }
  &:active:enabled {
    background: ${(props) =>
      props.isInverted
        ? 'transparent'
        : props.theme.button[props.buttonType].backgroundColor.active};
    color: ${(props) =>
      props.isInverted
        ? props.theme.button[props.buttonType].invertedColors.active
        : props.theme.button[props.buttonType].color};
  }
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  & a {
    color: ${(props) => props.theme.button.primary.color};
  }

  & :first-of-type {
    svg {
      margin-right: ${(props) => (props.buttonSize === 'L' ? '15px' : '0px')};
      font-size: ${(props) =>
        props.buttonSize === 'M'
          ? '12px'
          : props.buttonSize === 'F'
          ? '24px'
          : '18px'};
    }
  }
`;

export default StyledButton;
