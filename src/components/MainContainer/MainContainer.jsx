import { Container, Main } from './MainContainer.styled';

export const MainContainer = ({ children }) => {
  return (
    <Main>
      <Container>{children}</Container>
    </Main>
  );
};
