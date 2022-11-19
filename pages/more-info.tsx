import styled from "styled-components";
import { MoreInfo } from "../components/more-info";

const Container = styled.div`
  overflow: auto;
  height: 100vh;
  background: linear-gradient(90deg, #005aff, #0544b9, #001aff, #0603a3);
  background-size: 400% 400%;
  animation: gradient 6s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export default function MoreInfoPage() {
  return (
    <Container>
      <MoreInfo />
    </Container>
  );
}
