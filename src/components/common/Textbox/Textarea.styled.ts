import styled, { css } from 'styled-components';

export const Textarea = styled.textarea(
  ({ theme: { textArea } }) => css`
    border: 1px #dedede solid;
    border-radius: 4px;
    width: 100%;
    padding: 12px;
    padding-top: 6px;
    transition: all 0.3s ease-in-out;
    &::placeholder {
      color: ${textArea.borderColor.hover};
      font-size: 14px;
    }
    &:hover {
      border-color: ${textArea.borderColor.hover};
    }
    &:focus {
      outline: none;
      border-color: ${textArea.borderColor.focus};
      &::placeholder {
        color: ${textArea.color.placeholder.normal};
      }
    }
    &:disabled {
      color: ${textArea.color.disabled};
      border-color: ${textArea.borderColor.disabled};
      cursor: not-allowed;
    }
    &:read-only {
      color: ${textArea.color.readOnly};
      border: none;
      background-color: ${textArea.backgroundColor.readOnly};
      &:focus {
        &::placeholder {
          color: ${textArea.color.placeholder.focus.readOnly};
        }
      }
      cursor: not-allowed;
    }
  `
);
