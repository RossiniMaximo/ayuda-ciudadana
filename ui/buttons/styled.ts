import styled from "styled-components";

export const CallToAction = styled.button`
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

export const Form = styled(CallToAction)`
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

export const Login = styled(CallToAction)`
  background-color: transparent;
  font-weight: 500;
  font-size: 15px;
  width: 150px;
`;

export const Register = styled(Login)`
  border: solid 1px white;
  width: 120px;
  height: 40px;
`;

export const LoginAnim = styled(CallToAction)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 200px;
  height: 45px;
  font-size: 16px;
  font-weight: 700;
`;

export const Logout = styled(Register)`
  color: red;
  border: solid 1px red;
`;
