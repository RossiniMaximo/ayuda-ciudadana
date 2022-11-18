import styled from "styled-components";
import { Form } from "../components/form";
import { Layout } from "../components/layout";

const Container = styled.div`
  overflow: auto;
  height: 100vh;
  background: linear-gradient(90deg, #a10ad6, #72037b, #d60aa9, #7b033d);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;

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

export default function FormPage() {
  return (
    <Container>
      <Layout>
        <Form />
      </Layout>
    </Container>
  );
}
