import styled from "styled-components";

export const ContainerAllTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding-left: 30px;
  margin-top: 50px;
`;

export const ContainerText = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 900px;
`;

export const Container = styled.div`
  display: flex;
  padding-right: 20px;
  align-items: start;
  justify-content: space-between;

  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

export const ContainerImages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 500px;
  gap: 3vw;
  background-color: #042c89;
  padding: 10px;
  border-radius: 10px;

  @media (max-width: 769px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 50px;
    margin-left: 20px;
  }
  @media (min-width: 600px) {
    height: 400px;
  }
`;

export const ContainerNextPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  gap: 50px;
`;

export const ContainerVideoText = styled.div`
  width: 90%;
`;
