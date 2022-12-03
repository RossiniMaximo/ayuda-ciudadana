import styled from "styled-components";
import { BodyWhiteText, LargeWhiteText, BodyText } from "../typography";

interface fieldsProps {
  children: any;
  name: string;
  value?: string;
  required: boolean;
  readonly?: boolean;
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

const InputSecondary = styled(Input)`
  width: 230px;
  font-size: 14px;
  height: 40px;
`;

export function PrimaryField({ name, required, children, type }: fieldsProps) {
  return (
    <Container>
      <Label>
        <LargeWhiteText>{children}</LargeWhiteText>
        <Input name={name} required={required} type={type} />
      </Label>
    </Container>
  );
}

export function SecondaryField({ readonly, value, name, required, children, type }: fieldsProps) {
  return (
    <Container>
      <Label>
        <BodyWhiteText>{children}</BodyWhiteText>
        {readonly ? (
          <InputSecondary
            onChange={() => {}}
            readOnly
            defaultValue={value || ""}
            name={name}
            required={required}
            type={type}
          />
        ) : (
          <InputSecondary defaultValue={value || ""} name={name} required={required} type={type} />
        )}
      </Label>
    </Container>
  );
}
