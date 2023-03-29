import React from 'react';
import { SchemaSubject } from 'generated-sources';
import EditorViewer from 'components/common/EditorViewer/EditorViewer';
import { Card } from 'antd';
import styled from 'styled-components';

import * as S from './LatestVersionItem.styled';

interface LatestVersionProps {
  schema: SchemaSubject;
}

const CardWrap = styled(Card)`
  font-family: 'Titillium Web', sans-serif;
  border: 1px solid #dedede;
  & .ant-card-head {
    background: #f5f5f5;
  }
`;
const InnerList = styled.div`
  width: 100%;
  padding: 16px 0;
  border-bottom: 1px solid #dadada;
  display: block;
`;
const LatestVersionItem: React.FC<LatestVersionProps> = ({
  schema: { id, subject, schema, compatibilityLevel, version, schemaType },
}) => (
  <S.Wrapper>
    <CardWrap type="inner" title="Actual version">
      <EditorViewer data={schema} schemaType={schemaType} maxLines={28} />
    </CardWrap>
    <CardWrap type="inner" title="Latest version">
      <InnerList>
        <div>Latest version</div>
        <p>{version}</p>
      </InnerList>
      <InnerList>
        <div>ID</div>
        <p>{id}</p>
      </InnerList>
      <InnerList>
        <div>Type</div>
        <p>{schemaType}</p>
      </InnerList>
      <InnerList>
        <div>Subject</div>
        <p>{subject}</p>
      </InnerList>
      <InnerList>
        <div>Compatibility</div>
        <p>{compatibilityLevel}</p>
      </InnerList>
    </CardWrap>
  </S.Wrapper>
);

export default LatestVersionItem;
