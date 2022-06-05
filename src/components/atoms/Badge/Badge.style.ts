import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: fit-content;
  width: fit-content;
`;

export const Badge = styled.div<{ color: string }>`
  position: absolute;
  bottom: calc(100% - 15px);
  left: calc(100% - 17px);
  width: 20px;
  height: 20px;

  background-color: ${({ color }) => color};

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 99px;
  
  font-weight: 700;
  font-size: 14px;
  font-family: 'Quicksand';
  line-height: 18px;
  color: #ffffff;
`;
