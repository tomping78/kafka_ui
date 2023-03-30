import React, { useCallback, useRef } from 'react';
import { FormError } from 'components/common/Input/Input.styled';
import { ErrorMessage } from '@hookform/error-message';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { Button } from 'components/common/Button/Button';
import IconButtonWrapper from 'components/common/Icons/IconButtonWrapper';
import CloseIcon from 'components/common/Icons/CloseIcon';
import { yupResolver } from '@hookform/resolvers/yup';
import yup from 'lib/yupExtended';
import { Card } from 'antd';
import ReactAce from 'react-ace/lib/ace';
import styled from 'styled-components';

import * as S from './QueryForm.styled';

export interface Props {
  fetching: boolean;
  hasResults: boolean;
  handleClearResults: () => void;
  handleSSECancel: () => void;
  submitHandler: (values: FormValues) => void;
}
type StreamsPropertiesType = {
  key: string;
  value: string;
};
export type FormValues = {
  ksql: string;
  streamsProperties: StreamsPropertiesType[];
};

const streamsPropertiesSchema = yup.object().shape({
  key: yup.string().trim(),
  value: yup.string().trim(),
});
const validationSchema = yup.object({
  ksql: yup.string().trim().required(),
  streamsProperties: yup.array().of(streamsPropertiesSchema),
});

const QueryForm: React.FC<Props> = ({
  fetching,
  hasResults,
  handleClearResults,
  handleSSECancel,
  submitHandler,
}) => {
  const {
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onTouched',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      ksql: '',
      streamsProperties: [{ key: '', value: '' }],
    },
  });
  const { fields, append, remove } = useFieldArray<
    FormValues,
    'streamsProperties'
  >({
    control,
    name: 'streamsProperties',
  });

  const handleAddNewProperty = useCallback(() => {
    if (
      getValues().streamsProperties.every((prop) => {
        return prop.key;
      })
    ) {
      append({ key: '', value: '' });
    }
  }, []);

  const inputRef = useRef<ReactAce>(null);

  const handleFocus = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const textInput = inputRef?.current?.editor?.textInput as any;

    if (textInput) {
      textInput.focus();
    }
  };

  const CardWrap = styled(Card)`
    font-family: 'Titillium Web', sans-serif;
    border: 1px solid #dedede;
    & .ant-card-head {
      background: #f5f5f5;
    }
  `;

  return (
    <S.QueryWrapper>
      <form onSubmit={handleSubmit(submitHandler)}>
        <S.KSQLInputsWrapper>
          <CardWrap
            type="inner"
            title="KSQL"
            extra={
              <Button
                buttonType="primary"
                buttonSize="S"
                onClick={() => setValue('ksql', '')}
                isInverted
              >
                Clear
              </Button>
            }
          >
            <S.Fieldset aria-labelledby="ksqlLabel">
              <Controller
                control={control}
                name="ksql"
                render={({ field }) => (
                  <S.SQLEditor
                    {...field}
                    commands={[
                      {
                        // commands is array of key bindings.
                        // name for the key binding.
                        name: 'commandName',
                        // key combination used for the command.
                        bindKey: { win: 'Ctrl-Enter', mac: 'Command-Enter' },
                        // function to execute when keys are pressed.
                        exec: () => {
                          handleSubmit(submitHandler)();
                        },
                      },
                    ]}
                    readOnly={fetching}
                    ref={inputRef}
                  />
                )}
              />
              <FormError>
                <ErrorMessage errors={errors} name="ksql" />
              </FormError>
            </S.Fieldset>
          </CardWrap>

          <CardWrap type="inner" title="Stream properties:">
            <S.StreamPropertiesContainer>
              {fields.map((item, index) => (
                <S.InputsContainer key={item.id}>
                  <S.StreamPropertiesInputWrapper>
                    <Controller
                      control={control}
                      name={`streamsProperties.${index}.key`}
                      render={({ field }) => (
                        <input
                          {...field}
                          placeholder="Key"
                          aria-label="key"
                          type="text"
                        />
                      )}
                    />
                    <FormError>
                      <ErrorMessage
                        errors={errors}
                        name={`streamsProperties.${index}.key`}
                      />
                    </FormError>
                  </S.StreamPropertiesInputWrapper>
                  <S.StreamPropertiesInputWrapper>
                    <Controller
                      control={control}
                      name={`streamsProperties.${index}.value`}
                      render={({ field }) => (
                        <input
                          {...field}
                          placeholder="Value"
                          aria-label="value"
                          type="text"
                        />
                      )}
                    />
                    <FormError>
                      <ErrorMessage
                        errors={errors}
                        name={`streamsProperties.${index}.value`}
                      />
                    </FormError>
                  </S.StreamPropertiesInputWrapper>

                  <S.DeleteButtonWrapper onClick={() => remove(index)}>
                    <IconButtonWrapper aria-label="deleteProperty">
                      <CloseIcon aria-hidden />
                    </IconButtonWrapper>
                  </S.DeleteButtonWrapper>
                </S.InputsContainer>
              ))}
              <Button
                type="button"
                buttonSize="S"
                buttonType="secondary"
                onClick={handleAddNewProperty}
              >
                Add Stream Property
              </Button>
            </S.StreamPropertiesContainer>
          </CardWrap>
        </S.KSQLInputsWrapper>
        <S.KSQLButtons>
          <Button
            buttonType="primary"
            buttonSize="M"
            type="submit"
            disabled={fetching}
            onClick={handleFocus}
          >
            Execute
          </Button>
          <Button
            buttonType="secondary"
            buttonSize="M"
            disabled={!fetching}
            onClick={handleSSECancel}
          >
            Stop query
          </Button>
          <Button
            buttonType="secondary"
            buttonSize="M"
            disabled={fetching || !hasResults}
            onClick={handleClearResults}
          >
            Clear results
          </Button>
        </S.KSQLButtons>
      </form>
    </S.QueryWrapper>
  );
};

export default QueryForm;
