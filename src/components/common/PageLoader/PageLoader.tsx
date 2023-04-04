import React from 'react';
import { Spin } from 'antd';
import * as S from './PageLoader.styled';

const PageLoader: React.FC = () => (
  <S.Wrapper>
    <Spin size="large" />
  </S.Wrapper>
);

export default PageLoader;
