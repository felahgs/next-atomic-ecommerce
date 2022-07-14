import styled from 'styled-components';

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 260px;
  padding: 1rem;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 2px 4px rgba(59, 69, 123, 0.2), 0px 4px 8px rgba(92, 107, 192, 0.2);
  }
`;

export const BottonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

