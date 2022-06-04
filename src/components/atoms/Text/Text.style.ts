import styled from 'styled-components';

export const Text = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.0275em;
  color: ${({ theme }) => theme.colors.text};
`;

export const Caption = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 158%;
  letter-spacing: 0.0075em;
`;

export const Subcaption = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 143%;
letter-spacing: 0.018em;

color: ${({ theme }) => theme.colors.subcaption};
`;

