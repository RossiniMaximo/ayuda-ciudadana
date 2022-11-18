import styled from "styled-components";

export const FirstSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 65vw;
  max-width: 750px;
`;

export const ContainerLinks = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 35px;
  align-items: center;
`;

export const HeaderEl = styled.header`
  @media (max-width: 810px) {
    height: 70px;
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

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Navigate = styled.div`
  cursor: pointer;
`;
