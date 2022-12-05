import { Dispatch, SetStateAction } from "react";
import AuthCode from "react-auth-code-input";
import { BodyWhiteText, TinyWhiteText } from "ui/typography";
import { AuthCodeEl, AuthMessage, ContainerAuthCode, EmailAuth } from "./styled";
import styles from "./auth.module.css";
interface Props {
  setCode: Dispatch<SetStateAction<string>>;
  email: string;
  error: boolean;
}

function Auth({ error, setCode, email }: Props) {
  return (
    <ContainerAuthCode>
      <AuthMessage>
        <BodyWhiteText>
          Se ha envíado un código a<EmailAuth> {email}</EmailAuth>
        </BodyWhiteText>
      </AuthMessage>

      <AuthCodeEl>
        <TinyWhiteText>Por favor, ingrese el código</TinyWhiteText>
        <AuthCode
          containerClassName={styles["container-auth-code"]}
          inputClassName={`${styles["auth-code"]} ${error ? styles.error : ""}`}
          allowedCharacters="numeric"
          onChange={(code: string) => {
            setCode(code);
          }}
        />
      </AuthCodeEl>
    </ContainerAuthCode>
  );
}

export { Auth };
