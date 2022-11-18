import styled from "styled-components";

interface textProps {
  children: any;
}

const Title = styled.h1`
  font-weight: 800;
  font-size: 64px;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const TitleWhite = styled(Title)`
  color: white;
`;

const Large = styled.p`
  font-weight: 800;
  font-size: 24px;
  text-align: center;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

const LargeWhite = styled(Large)`
  color: white;
`;

const Body = styled.p`
  font-weight: 500;
  font-size: 18px;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const BodyWhite = styled(Body)`
  color: white;
`;

const Tiny = styled(Body)`
  font-weight: 500;
  font-size: 15px;
`;

const TinyWhite = styled(Tiny)`
  color: white;
`;

export function TitleText({ children }: textProps) {
  return <Title>{children}</Title>;
}

export function TitleWhiteText({ children }: textProps) {
  return <TitleWhite>{children}</TitleWhite>;
}

export function LargeWhiteText({ children }: textProps) {
  return <LargeWhite>{children}</LargeWhite>;
}

export function BodyWhiteText({ children }: textProps) {
  return <BodyWhite>{children}</BodyWhite>;
}

export function TinyWhiteText({ children }: textProps) {
  return <TinyWhite>{children}</TinyWhite>;
}
