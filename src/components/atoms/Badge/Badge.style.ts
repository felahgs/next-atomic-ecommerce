import styled from 'styled-components';

export const Badge = styled.div<{color: string}>`
  background-color: ${({color}) => color};
  
  position: relative;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 99px;
  bottom: 5px;
  left: calc(100% - 15px);

  font-weight: 700;
  font-size: 14px;
  font-family: system-ui;
  line-height: 18px;
  color: #FFFFFF;
`;
