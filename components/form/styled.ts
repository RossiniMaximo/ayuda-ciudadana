import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DescriptionContainer = styled.div`
  width: 50%;
  text-align: center;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const FormContainer = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (max-width: 600px) {
    margin-top: 60px;
    gap: 15px;
  }
`;

export const SocialsLink = styled.div`
  gap: 20px;
  display: flex;
  margin-top: 10px;
`;

export const ContainerSocialNetworks = styled.div`
  width: 253px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const FooterContainer = styled.div`
  justify-content: space-evenly;
  align-items: start;
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const ResponsiveContainer = styled.div`
  width: 100%;
  height: 39vh;
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 0px 50px;
  @media (max-width: 600px) {
    padding: 0px 20px;
  }
`;

export const ImgContainer = styled.div`
  @media (max-width: 600px) {
    display: none;
  }

  @media (max-height: 780px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 35vw;
  max-width: 700px;
  filter: brightness(0.8);
`;
