import styled from "styled-components";

interface textProps {
  children: string;
}

const Container = styled.p`
  font-family: "Poppins";
  font-size: 18px;
  margin: 0px;
  transform: scale(0.94);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
  @media (max-width: 600px) {
    font-size: 14px;
  }
  @keyframes scale {
    100% {
      transform: scale(1);
    }
  }
`;

const Span = styled.span`
  display: inline-block;
  opacity: 0;
  filter: blur(4px);
  color: white;
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 500;
  margin-left: 5px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
  animation: fade-in
    ${(props) => {
      return props.theme;
    }}
    0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);

  @keyframes fade-in {
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }
`;

const TitleWhite = styled.h1`
  font-weight: 800;
  font-size: 64px;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 30px;
  }
  color: white;
  transform: translateX(-600px);
  animation: 1.2s slideIn ease-in-out forwards 0.1s;
  z-index: 10;
  opacity: 0;
  position: relative;

  @keyframes skewBg {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes underline {
    100% {
      width: 100%;
    }
  }

  @keyframes slideIn {
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }
`;

const SubtitleWhite = styled.h3`
  font-weight: 800;
  font-size: 40px;
  text-align: center;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 19px;
  }
  color: white;
  transform: translateX(-600px);
  animation: 1.2s slideIn ease-in-out forwards 0.1s;
  z-index: 10;
  opacity: 0;
  position: relative;

  @keyframes skewBg {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes underline {
    100% {
      width: 100%;
    }
  }

  @keyframes slideIn {
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }
`;

export function TitleWhiteAnimText({ children }: textProps) {
  return <TitleWhite>{children}</TitleWhite>;
}

export function SubtitleWhiteAnimText({ children }: textProps) {
  return <SubtitleWhite>{children}</SubtitleWhite>;
}

export function BodyWhiteAnimText({ children }: textProps) {
  const textCollection = children.split(" ");
  var timer = 0.2;

  return (
    <Container>
      {textCollection.map((i) => (
        <Span theme={`${(timer = timer + 0.1)}s`}>{i}</Span>
      ))}
    </Container>
  );
}
