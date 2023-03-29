import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { RouteParamsClusterTopic } from 'lib/paths';
import { Button } from 'components/common/Button/Button';
import Editor from 'components/common/Editor/Editor';
import Select, { SelectOption } from 'components/common/Select/Select';
import useAppParams from 'lib/hooks/useAppParams';
import { showAlert } from 'lib/errorHandling';
import { useSendMessage, useTopicDetails } from 'lib/hooks/api/topics';
import { InputLabel } from 'components/common/Input/InputLabel.styled';
import { useSerdes } from 'lib/hooks/api/topicMessages';
import { SerdeUsage } from 'generated-sources';
import { Divider, Card } from 'antd';
import styled from 'styled-components';

import * as S from './SendMessage.styled';
import {
  getDefaultValues,
  getPartitionOptions,
  getSerdeOptions,
  validateBySchema,
} from './utils';

interface FormType {
  key: string;
  content: string;
  headers: string;
  partition: number;
  keySerde: string;
  valueSerde: string;
}

const SendMessage: React.FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
  const { clusterName, topicName } = useAppParams<RouteParamsClusterTopic>();
  const { data: topic } = useTopicDetails({ clusterName, topicName });
  const { data: serdes = {} } = useSerdes({
    clusterName,
    topicName,
    use: SerdeUsage.SERIALIZE,
  });
  const sendMessage = useSendMessage({ clusterName, topicName });

  const defaultValues = React.useMemo(() => getDefaultValues(serdes), [serdes]);
  const partitionOptions: SelectOption[] = React.useMemo(
    () => getPartitionOptions(topic?.partitions || []),
    [topic]
  );
  const {
    handleSubmit,
    formState: { isSubmitting },
    control,
  } = useForm<FormType>({
    mode: 'onChange',
    defaultValues: {
      ...defaultValues,
      partition: Number(partitionOptions[0].value),
    },
  });

  const submit = async ({
    keySerde,
    valueSerde,
    key,
    content,
    headers,
    partition,
  }: FormType) => {
    let errors: string[] = [];

    if (keySerde) {
      const selectedKeySerde = serdes.key?.find((k) => k.name === keySerde);
      errors = validateBySchema(key, selectedKeySerde?.schema, 'key');
    }

    if (valueSerde) {
      const selectedValue = serdes.value?.find((v) => v.name === valueSerde);
      errors = [
        ...errors,
        ...validateBySchema(content, selectedValue?.schema, 'content'),
      ];
    }

    let parsedHeaders;
    if (headers) {
      try {
        parsedHeaders = JSON.parse(headers);
      } catch (error) {
        errors.push('Wrong header format');
      }
    }

    if (errors.length > 0) {
      showAlert('error', {
        id: `${clusterName}-${topicName}-createTopicMessageError`,
        title: 'Validation Error',
        message: (
          <ul>
            {errors.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        ),
      });
      return;
    }
    try {
      await sendMessage.mutateAsync({
        key: key || null,
        content: content || null,
        headers: parsedHeaders,
        partition: partition || 0,
        keySerde,
        valueSerde,
      });
      onSubmit();
    } catch (e) {
      // do nothing
    }
  };

  const CardWrap = styled(Card)`
    font-family: 'Titillium Web', sans-serif;
    border: 1px solid #dedede;
    & .ant-card-head {
      background: #f5f5f5;
    }
  `;
  const ButtonArea = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;
    justify-content: space-between;
    bottom: 0;
    & > button {
      flex: 1 1 0;
    }
  `;
  const WrapInner = styled.div`
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
  `;

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit(submit)}>
        <WrapInner>
          <S.Columns>
            <S.Column>
              <InputLabel>Partition</InputLabel>
              <Controller
                control={control}
                name="partition"
                render={({ field: { name, onChange, value } }) => (
                  <Select
                    id="selectPartitionOptions"
                    aria-labelledby="selectPartitionOptions"
                    name={name}
                    onChange={onChange}
                    minWidth="100%"
                    options={partitionOptions}
                    value={value}
                  />
                )}
              />
            </S.Column>
            <S.Column>
              <InputLabel>Key Serde</InputLabel>
              <Controller
                control={control}
                name="keySerde"
                render={({ field: { name, onChange, value } }) => (
                  <Select
                    id="selectKeySerdeOptions"
                    aria-labelledby="selectKeySerdeOptions"
                    name={name}
                    onChange={onChange}
                    minWidth="100%"
                    options={getSerdeOptions(serdes.key || [])}
                    value={value}
                  />
                )}
              />
            </S.Column>
            <S.Column>
              <InputLabel>Value Serde</InputLabel>
              <Controller
                control={control}
                name="valueSerde"
                render={({ field: { name, onChange, value } }) => (
                  <Select
                    id="selectValueSerdeOptions"
                    aria-labelledby="selectValueSerdeOptions"
                    name={name}
                    onChange={onChange}
                    minWidth="100%"
                    options={getSerdeOptions(serdes.value || [])}
                    value={value}
                  />
                )}
              />
            </S.Column>
          </S.Columns>
          <Divider dashed />
          <S.Columns>
            <S.Column>
              <CardWrap type="inner" title="Key">
                <Controller
                  control={control}
                  name="key"
                  render={({ field: { name, onChange, value } }) => (
                    <Editor
                      readOnly={isSubmitting}
                      name={name}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </CardWrap>
            </S.Column>
            <S.Column>
              <CardWrap type="inner" title="Value">
                <Controller
                  control={control}
                  name="content"
                  render={({ field: { name, onChange, value } }) => (
                    <Editor
                      readOnly={isSubmitting}
                      name={name}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </CardWrap>
            </S.Column>
          </S.Columns>
          <S.Columns>
            <S.Column>
              <CardWrap type="inner" title="Header">
                <Controller
                  control={control}
                  name="headers"
                  render={({ field: { name, onChange } }) => (
                    <Editor
                      readOnly={isSubmitting}
                      defaultValue="{}"
                      name={name}
                      onChange={onChange}
                      height="200px"
                    />
                  )}
                />
              </CardWrap>
            </S.Column>
          </S.Columns>
        </WrapInner>
        <ButtonArea>
          <Button
            buttonSize="F"
            buttonType="modal_full_secon"
            type="submit"
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            buttonSize="F"
            buttonType="modal_full"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </ButtonArea>
      </form>
    </S.Wrapper>
  );
};

export default SendMessage;
