import { useState } from "react";
import { SuccessMessage } from "ui/alert-messages";
import { FormButton } from "../../ui/buttons";
import { PrimaryField } from "../../ui/fields";
import {
  LinkedinIcon,
  GithubIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "../../ui/icons/social-links";
import { LargeWhiteText, TinyWhiteText } from "../../ui/typography";
import { BodyWhiteAnimText, SubtitleWhiteAnimText } from "../../ui/typography/animation";
import {
  Img,
  ImgContainer,
  ResponsiveContainer,
  ContainerSocialNetworks,
  SocialsLink,
  FormContainer,
  Container,
  DescriptionContainer,
  FooterContainer,
} from "./styled";

export function Form() {
  const [success, setSuccess] = useState(false);

  const formSubmit = (event: any) => {
    event.preventDefault();
    setSuccess(true);
    event.target.email.value = "";
  };

  return (
    <Container>
      <SubtitleWhiteAnimText>¡Suscribite para recibir actualizaciones!</SubtitleWhiteAnimText>
      <DescriptionContainer>
        <BodyWhiteAnimText>
          Dejanos tu email así podremos avisarte cuando hayamos avanzado y realizados cambios en el
          sitio web, te mantendremos informado siempre.
        </BodyWhiteAnimText>
      </DescriptionContainer>
      <FormContainer onSubmit={formSubmit}>
        {success ? (
          <SuccessMessage>
            Su correo ha sido registrado correctamente y pronto recibirá noticias
          </SuccessMessage>
        ) : null}
        <PrimaryField required={true} name="email" type="email">
          CORREO ELÉCTRONICO
        </PrimaryField>
        <FormButton>Registar mi email</FormButton>
      </FormContainer>
      <ResponsiveContainer>
        <FooterContainer>
          <LargeWhiteText>Contáctanos</LargeWhiteText>
          <div>
            <TinyWhiteText>contacto@ayudaciudadana.com</TinyWhiteText>
            <TinyWhiteText>+54 xxxxxxxxxx</TinyWhiteText>
          </div>
          <ContainerSocialNetworks>
            <LargeWhiteText>Nuestras redes</LargeWhiteText>
            <SocialsLink>
              <LinkedinIcon />
              <GithubIcon />
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
            </SocialsLink>
          </ContainerSocialNetworks>
        </FooterContainer>
        <ImgContainer>
          <Img
            src="https://res.cloudinary.com/dmycj7gmx/image/upload/v1668557437/ayuda-ciudadana/1668384727693_1_eh7vus.png"
            alt=""
          />
        </ImgContainer>
      </ResponsiveContainer>
    </Container>
  );
}
