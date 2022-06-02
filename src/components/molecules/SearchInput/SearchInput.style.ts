import styled from 'styled-components';


export const Container = styled.div`
  background-color: ${({theme}) => theme.colors.gray[5]};
  border-radius: 40px;
  border: solid 1px black;
  display: flex;
  box-shadow: 1px 5px 8px -2px rgb(50 46 46 / 78%);
  -webkit-box-shadow: 1px 5px 8px -2px rgb(50 46 46 / 78%);
  -moz-box-shadow: 1px 5px 8px -2px rgb(50 46 46 / 78%);
  position: relative;

  height: 38px;
  max-width: 600px;
`;


export const WrapperSearchIcon = styled.span`
  position: absolute;
  left: 13px;
  top: 10px;
`;

export const ClearButton = styled.button`
  border: 0;
  background-color: none;
  position: absolute;
  right: 13px;
  top: 9px;
  cursor: pointer;
`;

export const SearchInput = styled.input`
border: none;
background-color: transparent;

outline-style: none;
width: 100%;
padding: 0 40px;

font-weight: 400;
font-size: 20px;
line-height: 158%;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
letter-spacing: 0.0075em;

`;