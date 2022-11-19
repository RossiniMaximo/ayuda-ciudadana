import { Img, ShapeContainer } from "./styled";

interface shapeProps {
  url: string;
}

export function ShapeImage({ url }: shapeProps) {
  return (
    <ShapeContainer>
      <Img src={url} />
    </ShapeContainer>
  );
}
