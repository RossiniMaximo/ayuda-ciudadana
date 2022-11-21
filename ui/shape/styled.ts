import styled from "styled-components";

export const ShapeContainer = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  max-width: 250px;
  max-height: 250px;
  height: 150px;
  width: 200px;
  margin: auto;
  border-radius: 50%;
  box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  @media (max-width: 769px) {
    height: 40vw;
    width: 40vw;
  }
`;

export const Img = styled.img`
  max-height: 250px;
  max-width: 250px;
  height: 17vw;
  width: 17vw;

  @media (max-width: 769px) {
    height: 40vw;
    width: 40vw;
  }
`;
