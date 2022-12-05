import styled from "styled-components";

export const FirstSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 750px;
`;

export const ContainerLinks = styled.div`
  display: flex;
  gap: 35px;
  align-items: center;
  text-align: center;
`;

export const HeaderEl = styled.header`
  @media (max-width: 810px) {
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: start;
    padding: 0px 20px;
  }
`;
export const ContainerDesktop = styled.div`
  display: flex;
  padding: 0px 20px;
  justify-content: space-between;
  @media (max-width: 810px) {
    display: none;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
`;

export const Navigate = styled.div`
  cursor: pointer;
`;

export const ContainerMobile = styled.div`
  @media (min-width: 810px) {
    display: none;
  }
  display: flex;
  width: 95vw;
  justify-content: space-between;
  align-items: center;
`;

export const TitleContainerMobile = styled.div`
  display: inline-block;
`;
