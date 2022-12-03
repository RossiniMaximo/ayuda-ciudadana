import { getToken, sendAuthCode } from "lib/api";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { ErrorMessage } from "ui/alert-messages";
import { AnimButton } from "ui/buttons";
import { SecondaryField } from "ui/fields";
import { LargeWhiteText, TinyWhiteText } from "ui/typography";
import { Auth } from "./auth-code";
import {
  Card,
  ContainerButton,
  ContainerCard,
  ContainerImg,
  ContainerInput,
  ContainerMain,
  ContainerTitle,
  BackgroundColor,
  Img,
} from "./styled";

function LoginUser({ setModal }: any) {
  const [errorCode, setErrorCode] = useState(false);
  const [anim, setAnim] = useState(false);
  const [click, setClick] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const router = useRouter();

  async function onSubmit(e: any) {
    e.preventDefault();
    if (!click) {
      const emailInput = (e.target as any).email.value;
      setEmail(emailInput);
      sendAuthCode(emailInput);
      setClick(true);
    } else {
      if (code.length === 6) {
        setAnim(true);
        setErrorCode(false);
        const response = await getToken(email, parseInt(code));
        setAnim(false);
        window.scrollTo(0, 0);
        response ? router.push("/my-profile") : setErrorCode(true);
      }
    }
  }

  return (
    <ContainerMain>
      <ContainerCard theme={fadeOut}>
        <ContainerImg>
          <Img>
            <Image
              style={{ borderRadius: 10 }}
              src="https://i.postimg.cc/YqKS9bxB/login.png"
              alt=""
              layout="fill"
            />
          </Img>
          <TinyWhiteText>Ingresá O creá una cuenta</TinyWhiteText>
        </ContainerImg>
        <Card>
          <ContainerTitle>
            <LargeWhiteText>Ingresar</LargeWhiteText>
            <hr />
          </ContainerTitle>
          <form onSubmit={onSubmit}>
            <ContainerInput>
              {click ? (
                <Auth error={errorCode} setCode={setCode} email={email} />
              ) : (
                <SecondaryField name="email" required={true} type="email">
                  Correo eléctronico
                </SecondaryField>
              )}
            </ContainerInput>
            <ContainerButton>
              <AnimButton anim={anim}>{click ? "Ingresar" : "Siguiente"}</AnimButton>
            </ContainerButton>
          </form>
        </Card>
      </ContainerCard>
      <BackgroundColor
        onClick={() => {
          setFadeOut(true);
          setTimeout(() => setModal(false), 400);
        }}
      />
    </ContainerMain>
  );
}

export { LoginUser };
