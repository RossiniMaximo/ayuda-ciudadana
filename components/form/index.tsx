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
import {
  BodyWhiteAnimText,
  SubtitleWhiteAnimText,
} from "../../ui/typography/animation";
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
import styled from "styled-components";

const MainContainer = styled.div`
  overflow: auto;
  height: 650px;
  background: linear-gradient(90deg, #a10ad6, #72037b, #d60aa9, #7b033d);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
  padding-top: 20px;
  @media (min-width: 600px) {
    height: 650px;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
export function Form() {
  return (
    <MainContainer>
      <Container>
        <SubtitleWhiteAnimText>
          ¡Suscribite para recibir actualizaciones!
        </SubtitleWhiteAnimText>
        <DescriptionContainer>
          <BodyWhiteAnimText>
            Dejanos tu email así podremos avisarte cuando hayamos avanzado y
            realizados cambios en el sitio web, te mantendremos informado
            siempre.
          </BodyWhiteAnimText>
        </DescriptionContainer>
        <FormContainer>
          <PrimaryField type="email">CORREO ELÉCTRONICO</PrimaryField>
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
    </MainContainer>
  );
}
