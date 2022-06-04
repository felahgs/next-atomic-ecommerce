import styled, { css } from 'styled-components';

export const Button = styled.button<{
  variant: 'default' | 'raised';
  size: string;
}>`
  border: 1px solid ${({ theme }) => theme.colors.blue[30]};
  border-radius: 4px;
  background-color: #fff;
  transition: ease 0.5;

  min-width: 104px;
  height: 40px;
  
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0.0075em;
  color: ${({ theme }) => theme.colors.blue[70]};

  transition: 0.2s;
  cursor: pointer;
  
  :hover {
    filter: brightness(95%);
  }

  :disabled {
    opacity: 0.3;
    cursor: default;
  }

  ${(props) =>
    props.variant === 'raised' &&
    css`
      box-shadow: 0px 2px 4px rgba(27, 78, 163, 0.2),
        0px 4px 8px rgba(41, 121, 255, 0.2);
      border: none;
    `}

  ${(props) =>
    props.size === 'small' &&
    css`
      height: 30px;
      min-width: 80px;
      font-size: 15px;
    `}

  ${(props) =>
    props.size === 'large' &&
    css`
      height: 50px;
      font-size: 25px;
      min-width: 114px;
    `}
`;
