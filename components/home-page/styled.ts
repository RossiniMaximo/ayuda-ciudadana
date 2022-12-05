import styled from "styled-components";

export const TextContainer = styled.div`
  &:before {
    content: "";
    height: 8vw;
    max-height: 200px;
    display: inline-block;
  }
`;

export const InfoContainer = styled.div`
  max-width: 710px;
  width: 85vw;
  @media (max-width: 600px) {
    max-width: 400px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 78px;
  @media (max-width: 600px) {
    margin-top: 70px;
  }

  &:before {
    content: "";
    width: 10vw;
    max-width: 150px;
    display: inline-block;
  }
  display: flex;
`;

export const SocialsLink = styled.div`
  margin-top: 150px;
  gap: 20px;

  @media (max-width: 600px) {
    margin-top: 100px;
  }

  &:before {
    content: "";
    width: 9vw;
    max-width: 150px;
    display: inline-block;
  }
  display: flex;
`;

export const ImgContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 90px;
  @media (max-width: 600px) {
    display: none;
  }

  @media (max-height: 780px) {
    display: none;
  }

  @media (max-width: 1200px) {
    position: initial;
  }
`;

export const Img = styled.img`
  width: 30vw;
  max-width: 700px;
  filter: brightness(0.5);
`;

export const ContainerSeparator = styled.div`
  &:before {
    content: "";
    width: 10vw;
    max-width: 150px;
    display: inline-block;
  }
  display: flex;
`;

export const ResponsiveContainer = styled.div`
  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 50px;
  }
`;
