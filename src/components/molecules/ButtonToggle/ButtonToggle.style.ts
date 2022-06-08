import { Button } from '@atoms/Button/Button.style';

import styled, { css } from 'styled-components';

export const ButtonToggle = styled.div`
  background-color: ${({ theme }) => theme.colors.selection};

  position: relative;

  display: flex;
  flex-direction: row;

  height: 36px;
  width: fit-content;
`;

export const Element = styled.div<{ selected: boolean }>`
  width: 86px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1;

  font-size: 14px;
  cursor: pointer;
  transition: ease 0.5s;
  color: ${({ theme }) => theme.colors.subcaption};

  :hover {
    color: ${({ theme }) => theme.colors.blue[70]};
    transition: all 0s ease 0s
  }

  ${(props) =>
    props.selected &&
    css`
      cursor: default;

      color: ${({ theme }) => theme.colors.blue[70]};
    `}
`;

export const Selector = styled(Button)<{ position: number }>`
  position: absolute;
  min-width: 86px;

  border: none;
  border-radius: 6px;
  left: calc(${({ position }) => `86px * ${position}`});
  transition: ease 0.5s;

  /* top: 30px; */
  /* background-color: green !important; */
`;
