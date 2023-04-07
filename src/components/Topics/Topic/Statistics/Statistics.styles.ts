import { List } from 'components/common/PropertiesList/PropertiesList.styled';
import styled from 'styled-components';

export const ProgressContainer = styled.div`
  padding: 1.5rem 1rem;
  background: ${({ theme }) => theme.code.backgroundColor};
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 300px;
  text-align: center;
  flex: 1 1 auto;

  ${List} {
    opacity: 0.5;
  }
`;

export const ActionsBar = styled.div`
  display: flex;
  justify-content: end;
  gap: 8px;
  padding: 5px 0;
  align-items: center;
  position: absolute;
  top: 110px;
  right: 35px;
  @media screen and (max-width: 1200px) {
    position: relative;
    top: 30px;
    right: 0;
  }
`;

export const CreatedAt = styled.div`
  font-size: 13px;
  line-height: 2;
  color: #333;
`;

export const PartitionInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 24px;
`;

export const ProgressBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 280px;
`;
