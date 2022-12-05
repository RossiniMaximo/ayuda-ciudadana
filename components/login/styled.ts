import { useEffect, useState } from "react";
import styled from "styled-components";

export const ContainerMain = styled.div`
  width: 100%;
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: absolute;
  z-index: 3;
  top: 0;
`;

export const ContainerCard = styled.div`
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.4);
  padding: 10px;
  @media (min-width: 600px) {
    display: flex;
    gap: 15px;
    max-width: 500px;
  }
  z-index: 4;

  background: linear-gradient(90deg,#000000,#302f30,#000000,#121212);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite, fadeInLeft 0.5s ease-in-out;

  ${({ theme }) => {
    const [anim, setAnim] = useState("");
    useEffect(() => {
      if (theme === true) {
        setAnim(`animation: fadeInLeftOut 0.5s ease infinite;
        @keyframes fadeInLeftOut {
  from {
    opacity: 1;
    
  }
  to {
    opacity: 0;
    transform: translateX(300px);
  };
        `);
      }
    }, [theme]);
    return anim;
  }};

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

  
  @keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-300px);
  }
  to {
    opacity: 1;
  };



`;

export const ContainerImg = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  @media (min-width: 600px) {
    max-width: 400px;
  }
`;

export const Img = styled.div`
  width: 100%;
  height: 50%;
  min-height: 200px;
  position: relative;
  border-radius: 10px;
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerTitle = styled.div`
  margin: 25px 0px;
  text-align: center;
  width: 100%;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 40px;
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  width: 100%;
`;

export const ContainerAuthCode = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AuthMessage = styled.div`
  text-align: center;
`;

export const AuthCodeEl = styled.div`
  margin-top: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const EmailAuth = styled.span`
  color: lime;
`;

export const BackgroundColor = styled.div`
  background-color: #141414b8;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 3;
`;
