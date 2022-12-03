import { MyProfile } from "components/my-profile";
import { useGetToken } from "lib/hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Loader } from "ui/loader";
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
      <Layout>{isLoading ? <Loader /> : <MyProfile />}</Layout>
    </Container>
  );
}
