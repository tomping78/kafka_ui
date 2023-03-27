import Heading from 'components/common/heading/Heading.styled';
import React from 'react';
import styled from 'styled-components';
import theme from 'theme/theme';

export const Wrapper = styled.div`
  width: 100%;
  /* background-color: ${theme.layout.stuffColor}; */
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 16px;
  margin-bottom: 20px;
  max-height: 700px;

  & > * {
    background-color: ${theme.panelColor};
    overflow-y: auto;
  }

  & > div:first-child {
    flex-grow: 2;
  }

  & > div:last-child {
    flex-grow: 1;
    padding: 24px;

    & > div {
      display: block;
      padding: 0;
      border-top: 2px solid #333;
      & > div {
        display: flex;
        padding: 0;
        border-bottom: 1px solid #ccc;
        & > div {
          min-width: 200px;
          padding: 16px;
          background: #faf1e2;
          font-weight: 600;
        }
        & > p {
          padding: 16px;
        }
      }
    }
  }
`;

export const MetaDataLabel = styled((props) => (
  <Heading level={4} {...props} />
))`
  color: ${theme.lastestVersionItem.metaDataLabel.color};
  width: 110px;
`;
