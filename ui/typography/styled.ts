import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 800;
  font-size: 64px;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

export const TitleWhite = styled(Title)`
  color: white;
`;

export const Large = styled.p`
  font-weight: 800;
  font-size: 24px;
  text-align: center;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export const LargeWhite = styled(Large)`
  color: white;
`;

export const LargeBoldWhite = styled(LargeWhite)`
  weight: 700;
`;

export const Body = styled.p`
  font-weight: 500;
  font-size: 18px;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const BodyWhite = styled(Body)`
  color: white;
`;

export const Tiny = styled(Body)`
  font-weight: 500;
  font-size: 15px;
`;

export const TinyWhite = styled(Tiny)`
  color: white;
`;
