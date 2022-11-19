import styled from "styled-components";
import { LargeWhiteText } from "../typography";

interface fieldsProps {
  children: any;
  type: "email" | "password" | "text" | "phone";
}

const Container = styled.div``;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Input = styled.input`
  height: 50px;
  border: none;
  width: 350px;
  border-radius: 5px;
  font-family: Poppins;
  font-size: 20px;
  outline: none;
  padding-left: 10px;
  @media (max-width: 600px) {
    width: 250px;
    height: 40px;
    font-size: 16px;
  }
`;

export function PrimaryField({ children, type }: fieldsProps) {
  return (
    <Container>
      <Label>
        <LargeWhiteText>{children}</LargeWhiteText>
        <Input type={type} />
      </Label>
    </Container>
  );
}
