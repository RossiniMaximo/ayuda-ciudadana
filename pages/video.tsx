import { Layout } from "components/layout";
import styled from "styled-components";
import { VideoSection } from "../components/videoSection";

const Container = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
`;

export default function Video() {
  return (
    <Layout>
      <Container>
        <VideoSection />
      </Container>
    </Layout>
  );
}
