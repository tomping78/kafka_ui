import styled, { css } from 'styled-components';
import BaseSQLEditor from 'components/common/SQLEditor/SQLEditor';

export const QueryWrapper = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  & form {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  }
`;

export const KSQLInputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  gap: 16px;

  padding-bottom: 16px;
  & > div {
    display: flex;
    flex-direction: column;
    flex: 1 1 50%;
    & > div:last-child {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
    }
  }
`;

export const KSQLInputHeader = styled.div`
  display: flex;
  flex: 1 1 0;
  justify-content: space-between;
`;

export const KSQLButtons = styled.div`
  display: flex;
  justify-content: right;
  gap: 5px;
`;

export const StreamPropertiesContainer = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: right;
  gap: 10px;
  width: 100%;
  & button {
    width: 200px;
    justify-content: center;
  }
`;

export const InputsContainer = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const StreamPropertiesInputWrapper = styled.div`
  & {
    width: 100%;
  }
  & > input {
    width: 100%;
    height: 40px;
    border: 1px solid #dedede;
    border-radius: 4px;
    font-size: 16px;
    padding-left: 15px;
  }
`;

export const DeleteButtonWrapper = styled.div`
  min-height: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: flex-start;
  margin-top: 10px;
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  & div {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  }
`;

export const SQLEditor = styled(BaseSQLEditor)(
  ({ readOnly, theme }) =>
    css`
      background: ${readOnly && theme.ksqlDb.query.editor.readonly.background};
      .ace-cursor {
        ${readOnly && theme.ksqlDb.query.editor.readonly.cursor}
      }
      .ace_print-margin {
        display: none;
      }
    `
);
