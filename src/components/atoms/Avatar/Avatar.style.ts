import styled from 'styled-components';

export const Avatar = styled.div<{
  bgColor?: string;
  fontColor?: string;
  size?: string;
  src?: string;
}>`
  height: ${({ size }) => size || '40px'};
  width: ${({ size }) => size || '40px'};
  background-color: ${(props) => props.bgColor || 'lightblue'};
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.44px;

  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${(props) => props.fontColor || '#ffffff'};
`;
