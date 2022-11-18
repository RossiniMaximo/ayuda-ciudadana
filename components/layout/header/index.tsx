import { useRouter } from "next/router";
import { LoginButton, RegisterButton } from "../../../ui/buttons";
import { TinyWhiteText, TitleWhiteText } from "../../../ui/typography";
import {
  Navigate,
  ContainerDesktop,
  ContainerButtons,
  ContainerLinks,
  FirstSectionContainer,
  HeaderEl,
} from "./styled";

export function Header() {
  const router = useRouter();
  function onClickLink(path: string) {
    router.push(path);
  }

  return (
    <article>
      <HeaderEl>
        <ContainerDesktop>
          <FirstSectionContainer>
            <TitleWhiteText>DINT</TitleWhiteText>
            <ContainerLinks>
              <Navigate onClick={() => onClickLink("/")}>
                <TinyWhiteText>Inicio</TinyWhiteText>
              </Navigate>
              <Navigate onClick={() => onClickLink("/more-info")}>
                <TinyWhiteText>Nuestra propuesta</TinyWhiteText>
              </Navigate>
              <Navigate onClick={() => onClickLink("/form")}>
                <TinyWhiteText>Suscribite</TinyWhiteText>
              </Navigate>
            </ContainerLinks>
          </FirstSectionContainer>
          <ContainerButtons className="login_container">
            <LoginButton>
              <TinyWhiteText>Iniciar sesión</TinyWhiteText>
            </LoginButton>
            <RegisterButton>
              <TinyWhiteText>Registrarse</TinyWhiteText>
            </RegisterButton>
          </ContainerButtons>
        </ContainerDesktop>
      </HeaderEl>
    </article>
  );
}
