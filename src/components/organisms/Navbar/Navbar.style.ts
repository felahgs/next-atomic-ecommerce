import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  position: relative;
  width: 100vw;
  height: 80px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;

  position: relative;
  padding: 0 1rem;
`;

export const ContainerLeft = styled(Container)``;

export const ContainerCenter = styled(Container)``;

export const ContainerRight = styled(Container)``;
