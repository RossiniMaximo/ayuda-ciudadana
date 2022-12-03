import { Layout } from "components/layout";
import { useGetToken } from "lib/hooks";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Loader } from "ui/loader";
import { MapComponent } from "../../components/mapSection";

const Container = styled.div`
  width: 100%;
  background: linear-gradient(90deg, #000000, #302f30, #000000, #121212);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite, fadeInLeft 0.5s ease-in-out;
`;

export default function MapPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const res = useGetToken();

  useEffect(() => {
    if (!res.token && res.set) {
      router.push({ pathname: "/", query: "login" });
    } else {
      setIsLoading(false);
    }
  }, [res]);

  return (
    <Container>
      <Layout>{isLoading ? <Loader /> : <MapComponent />}</Layout>
    </Container>
  );
}
