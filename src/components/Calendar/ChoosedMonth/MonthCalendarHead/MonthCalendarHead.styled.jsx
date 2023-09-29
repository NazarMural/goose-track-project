import styled from '@emotion/styled';

export const HeadWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 50px;
  border: 1px solid var(--calendar-grid-border);
  border-radius: 8px;
  margin-bottom: 14px;
  overflow: hidden;
`;

export const HeadCell = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  text-align: center;
  text-transform: uppercase;
  background-color: var(--cell-background);
  color: ${props => props.weekend};

  padding: 16px 0;
`;
