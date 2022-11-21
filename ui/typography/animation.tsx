import styled from "styled-components";

interface textProps {
  children: string;
}

const BodyWhite = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 15px;
  }
  color: white;
  transform: translateX(-600px);
  animation: 1.7s slideIn ease-in-out forwards 0.1s;
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
  font-size: 32px;
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

export function BodyWhiteAnimText({ children }: any) {
  return <BodyWhite>{children}</BodyWhite>;
}
