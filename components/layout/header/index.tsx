import { LoginUser } from "components/login";
import { removeToken, useGetToken } from "lib/hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LogoutButton, RegisterButton } from "ui/buttons";
import { LargeBoldWhiteText, TinyWhiteText, TitleWhiteText } from "ui/typography";
import { HamburgerMenu } from "./mobile-menu";
import {
  Navigate,
  ContainerDesktop,
  ContainerButton,
  ContainerLinks,
  FirstSectionContainer,
  HeaderEl,
  ContainerMobile,
  TitleContainerMobile,
} from "./styled";

export function Header({ login }: headerProps) {
  const router = useRouter();
  const token = useGetToken();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (login) setShowModal(true);
  }, []);

  function onClickLink(path: string) {
    router.push(path);
  }

  return (
    <article>
      <HeaderEl>
        <ContainerMobile>
          <TitleContainerMobile onClick={() => router.push("/")}>
            <TitleWhiteText>CITIZEN</TitleWhiteText>
          </TitleContainerMobile>
          <HamburgerMenu loginModal={setShowModal} />
        </ContainerMobile>
        <ContainerDesktop>
          <div onClick={() => router.push("/")}>
            <TitleWhiteText>CITIZEN</TitleWhiteText>
          </div>
          <FirstSectionContainer>
            <ContainerLinks>
              <Navigate onClick={() => onClickLink("/")}>
                <TinyWhiteText>Inicio</TinyWhiteText>
              </Navigate>
              <Navigate onClick={() => onClickLink("/more-info")}>
                <TinyWhiteText>Nuestra propuesta</TinyWhiteText>
              </Navigate>
              <Navigate onClick={() => onClickLink("/contact-us")}>
                <TinyWhiteText>Suscribite</TinyWhiteText>
              </Navigate>
              {token.email ? (
                <ContainerLinks>
                  <Navigate onClick={() => onClickLink("/my-profile")}>
                    <TinyWhiteText>Mi perfil</TinyWhiteText>
                  </Navigate>
                  <Navigate onClick={() => onClickLink("/map")}>
                    <TinyWhiteText>Mapa</TinyWhiteText>
                  </Navigate>
                </ContainerLinks>
              ) : null}
            </ContainerLinks>
          </FirstSectionContainer>
          {token.email ? (
            <ContainerButton onClick={() => removeToken()} className="login_container">
              <LogoutButton>Cerrar sesión</LogoutButton>
            </ContainerButton>
          ) : (
            <ContainerButton onClick={() => setShowModal(true)} className="login_container">
              <RegisterButton>
                <TinyWhiteText>Ingresar</TinyWhiteText>
              </RegisterButton>
            </ContainerButton>
          )}
        </ContainerDesktop>
      </HeaderEl>
      {showModal ? <LoginUser setModal={setShowModal} /> : null}
    </article>
  );
}

interface headerProps {
  login?: string;
}
