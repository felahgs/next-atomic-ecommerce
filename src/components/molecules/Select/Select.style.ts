import styled, {css} from 'styled-components';

export const Container = styled.div<{offset: number}>`
  position: relative;
  width: fit-content;

  z-index: 1;
  border: 1px solid ${({theme}) => theme.colors.gray[60]};
  border-radius: 4px;
  border-top: ${props  => props.offset ? 'none' : 'solid 1px'};
  
  ::before {
    content: '';
    width: 6%;
    height: 100%;

    border-top: 1px solid black;
    border-top-left-radius: 4px;

    position: absolute;
    left: 0;
    pointer-events: none;
    transition: all ease 0.1s;

    opacity: ${({offset}) => offset >= 1 ? '1' : '0'};
  }

  ::after {
    content: '';
    width: calc(100% - ${({offset}) => offset * 7}px);
    height: 100%;

    border-top: 1px solid black;
    border-top-right-radius: 4px;

    position: absolute;
    right: 0;
    top: 0;
    pointer-events: none;
    transition: all ease 0.1s;

    opacity: ${({offset}) => offset >= 1 ? '1' : '0'};
  }
`;

export const Label = styled.label<{hasValue: boolean}>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 16px;

  text-transform: uppercase;
  white-space: nowrap;
  color: ${({theme}) => theme.colors.subcaption};
  
  position: absolute;
  bottom: 75%;
  left: 6%;

  transition: all ease 0.2s;
  pointer-events: none;

  ${(props) =>
    !props.hasValue &&
    css`
      bottom: 25%;
      left: 10%;
      font-size: 14px;
    `}
`;

export const WrapperIcon = styled.span`
  position: absolute;
  top: 30%;
  right: 5px;

  pointer-events: none;
`;

export const Select = styled.select`
  height: 36px;
  padding: 6px;
  padding-right: 30px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;

  display: flex;
  align-items: center;
  letter-spacing: 0.018em;

  border: none;
  border-radius: 4px;

  z-index: 2;
  cursor: pointer;
  -webkit-appearance: none;

  :focus {
    outline: none;
  }

`;
