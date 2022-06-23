import styled from 'styled-components';

export const Rating = styled.div`
  display: flex;
  flex-direction: row;

  padding: 6px 12px;
  width: fit-content;
`;

export const Text = styled.p`
  font-size: 12px;
  margin-left: 5px;

  color: ${({ theme }) => theme.colors.gray[70]};
`;