import {
  Title,
  TitleWhite,
  Large,
  LargeBoldWhite,
  LargeWhite,
  Body,
  BodyWhite,
  Tiny,
  TinyWhite,
} from "./styled";

interface textProps {
  children: any;
}

export function TitleText({ children }: textProps) {
  return <Title>{children}</Title>;
}

export function TitleWhiteText({ children }: textProps) {
  return <TitleWhite>{children}</TitleWhite>;
}

export function LargeBoldText({ children }: textProps) {
  return <Large>{children}</Large>;
}

export function LargeBoldWhiteText({ children }: textProps) {
  return <LargeBoldWhite>{children}</LargeBoldWhite>;
}

export function LargeWhiteText({ children }: textProps) {
  return <LargeWhite>{children}</LargeWhite>;
}

export function BodyText({ children }: textProps) {
  return <Body>{children}</Body>;
}

export function BodyWhiteText({ children }: textProps) {
  return <BodyWhite>{children}</BodyWhite>;
}

export function TinyText({ children }: textProps) {
  return <Tiny>{children}</Tiny>;
}

export function TinyWhiteText({ children }: textProps) {
  return <TinyWhite>{children}</TinyWhite>;
}
