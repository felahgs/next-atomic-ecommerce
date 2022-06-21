import styled from 'styled-components';

export const Pill = styled.div`
  display: flex;
  flex-direction: row;

  padding: 6px 12px;
  width: fit-content;

  border-radius: 99px;
  background-color: ${({ theme }) => theme.colors.gray[5]};

  color: ${({ theme }) => theme.colors.gray[70]};
`;

export const Text = styled.p`
  font-size: '14px'
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5px;
  cursor: pointer;
`;

