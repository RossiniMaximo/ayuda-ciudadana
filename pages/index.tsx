import { useRouter } from "next/router";
import styled from "styled-components";
import { HomePage } from "../components/home-page";
import { Layout } from "../components/layout";
const Container = styled.div`
  overflow: auto;
  height: 100vh;
  background: url("https://res.cloudinary.com/dmycj7gmx/image/upload/v1668456564/ayuda-ciudadana/blackground_jq9ge5.png");
  background-size: cover;
  background-blend-mode: soft-light;
  background-color: #000000ab;
`;

export default function Home() {
  const { query } = useRouter();

  return (
    <Container>
      <Layout login={query ? Object.keys(query)[0] : ""}>
        <HomePage />
      </Layout>
    </Container>
  );
}
