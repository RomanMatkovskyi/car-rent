import { Container, Title, StyledImage } from "./FirstPage.styled";
import example from "../../assets/example.png";
import Catalog from "../../components/Catalog/Catalog";

const FirstPage = () => {
  return (
    <Container className="container">
      <Title>Catalog Page</Title>
      <Catalog />
      <StyledImage src={example} alt="Example" />
    </Container>
  );
};

export default FirstPage;
