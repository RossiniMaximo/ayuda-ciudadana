import styled from "styled-components";

interface buttonProps {
  children: any;
}

const CallToAction = styled.button`
  border-radius: 10px;
  border: none;
  background-color: #f57359;
  font-size: 20px;
  font-family: "Poppins";
  font-weight: 500;
  width: 200px;
  height: 47px;
  color: white;
  cursor: pointer;
`;

const Form = styled(CallToAction)`
  font-weight: 600;
  font-size: 24px;
  width: 250px;
  height: 60px;
  @media (max-width: 600px) {
    font-size: 16px;
    width: 170px;
    height: 45px;
  }
`;

const Login = styled(CallToAction)`
  background-color: transparent;
  font-weight: 500;
  font-size: 15px;
  width: 150px;
`;

const Register = styled(Login)`
  border: solid 1px white;
  width: 120px;
  height: 40px;
`;

export function CalltoActionButton({ children }: buttonProps) {
  return <CallToAction>{children}</CallToAction>;
}

export function LoginButton({ children }: buttonProps) {
  return <Login>{children}</Login>;
}

export function RegisterButton({ children }: buttonProps) {
  return <Register>{children}</Register>;
}

export function FormButton({ children }: buttonProps) {
  return <Form>{children}</Form>;
}
