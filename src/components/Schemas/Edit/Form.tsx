import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import {
  CompatibilityLevelCompatibilityEnum,
  SchemaType,
} from 'generated-sources';
import {
  clusterSchemaPath,
  clusterSchemasPath,
  ClusterSubjectParam,
} from 'lib/paths';
import { NewSchemaSubjectRaw } from 'redux/interfaces';
import Editor from 'components/common/Editor/Editor';
import Select from 'components/common/Select/Select';
import { Button } from 'components/common/Button/Button';
import { InputLabel } from 'components/common/Input/InputLabel.styled';
import PageHeading from 'components/common/PageHeading/PageHeading';
import { useAppDispatch, useAppSelector } from 'lib/hooks/redux';
import useAppParams from 'lib/hooks/useAppParams';
import {
  schemaAdded,
  getSchemaLatest,
  getAreSchemaLatestFulfilled,
  schemaUpdated,
  getAreSchemaLatestRejected,
} from 'redux/reducers/schemas/schemasSlice';
import PageLoader from 'components/common/PageLoader/PageLoader';
import { schemasApiClient } from 'lib/api';
import { showServerError } from 'lib/errorHandling';
import ContentArea from 'components/common/ContentArea/ContentArea.styled';
import styled from 'styled-components';
import { Card, Divider } from 'antd';

import * as S from './Edit.styled';

const Form: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { clusterName, subject } = useAppParams<ClusterSubjectParam>();

  const schema = useAppSelector((state) => getSchemaLatest(state));
  const isFetched = useAppSelector(getAreSchemaLatestFulfilled);
  const isRejected = useAppSelector(getAreSchemaLatestRejected);

  const formatedSchema = React.useMemo(() => {
    return schema?.schemaType === SchemaType.PROTOBUF
      ? schema?.schema
      : JSON.stringify(JSON.parse(schema?.schema || '{}'), null, '\t');
  }, [schema]);

  const methods = useForm<NewSchemaSubjectRaw>({
    mode: 'onChange',
    defaultValues: {
      schemaType: schema?.schemaType,
      compatibilityLevel:
        schema?.compatibilityLevel as CompatibilityLevelCompatibilityEnum,
      newSchema: formatedSchema,
    },
  });

  const CardWrap = styled(Card)`
    font-family: 'Titillium Web', sans-serif;
    border: 1px solid #dedede;
    & .ant-card-head {
      background: #f5f5f5;
    }
  `;

  const {
    formState: { isDirty, isSubmitting, dirtyFields },
    control,
    handleSubmit,
  } = methods;

  const onSubmit = async (props: NewSchemaSubjectRaw) => {
    if (!schema) return;

    try {
      if (dirtyFields.compatibilityLevel) {
        await schemasApiClient.updateSchemaCompatibilityLevel({
          clusterName,
          subject,
          compatibilityLevel: {
            compatibility: props.compatibilityLevel,
          },
        });
        dispatch(
          schemaUpdated({
            ...schema,
            compatibilityLevel: props.compatibilityLevel,
          })
        );
      }
      if (dirtyFields.newSchema || dirtyFields.schemaType) {
        const resp = await schemasApiClient.createNewSchema({
          clusterName,
          newSchemaSubject: {
            ...schema,
            schema: props.newSchema || schema.schema,
            schemaType: props.schemaType || schema.schemaType,
          },
        });
        dispatch(schemaAdded(resp));
      }

      navigate(clusterSchemaPath(clusterName, subject));
    } catch (e) {
      showServerError(e as Response);
    }
  };

  if (isRejected) {
    navigate('/404');
  }

  if (!isFetched || !schema) {
    return <PageLoader />;
  }
  return (
    <FormProvider {...methods}>
      <PageHeading
        text="Edit"
        backText="Schema Registry"
        backTo={clusterSchemasPath(clusterName)}
      />
      <ContentArea>
        <S.EditWrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div>
                <InputLabel>Type</InputLabel>
                <Controller
                  control={control}
                  rules={{ required: true }}
                  name="schemaType"
                  render={({ field: { name, onChange, value } }) => (
                    <Select
                      name={name}
                      value={value}
                      onChange={onChange}
                      minWidth="100%"
                      disabled
                      options={Object.keys(SchemaType).map((type) => ({
                        value: type,
                        label: type,
                      }))}
                    />
                  )}
                />
              </div>

              <div>
                <InputLabel>Compatibility level</InputLabel>
                <Controller
                  control={control}
                  name="compatibilityLevel"
                  render={({ field: { name, onChange, value } }) => (
                    <Select
                      name={name}
                      value={value}
                      onChange={onChange}
                      minWidth="100%"
                      disabled={isSubmitting}
                      options={Object.keys(
                        CompatibilityLevelCompatibilityEnum
                      ).map((level) => ({ value: level, label: level }))}
                    />
                  )}
                />
              </div>
            </div>
            <Divider dashed />
            <S.EditorsWrapper>
              <div>
                <CardWrap type="inner" title="Latest schema">
                  <Editor
                    schemaType={schema?.schemaType}
                    isFixedHeight
                    readOnly
                    height="350px"
                    value={formatedSchema}
                    name="latestSchema"
                    highlightActiveLine={false}
                  />
                </CardWrap>
              </div>
              <div>
                <CardWrap type="inner" title="New schema">
                  <Controller
                    control={control}
                    name="newSchema"
                    render={({ field: { name, onChange, value } }) => (
                      <Editor
                        schemaType={schema?.schemaType}
                        readOnly={isSubmitting}
                        defaultValue={value}
                        name={name}
                        onChange={onChange}
                        height="350px"
                      />
                    )}
                  />
                </CardWrap>
              </div>
            </S.EditorsWrapper>
            <Divider dashed />
            <S.ButtonWrapper>
              <Button
                buttonType="primary"
                buttonSize="M"
                type="submit"
                disabled={!isDirty || isSubmitting}
              >
                Submit
              </Button>
            </S.ButtonWrapper>
          </form>
        </S.EditWrapper>
      </ContentArea>
    </FormProvider>
  );
};

export default Form;
