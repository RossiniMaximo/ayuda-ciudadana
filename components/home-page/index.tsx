import { useRouter } from "next/router";
import { CalltoActionButton } from "../../ui/buttons";
import styles from "./homeComp.module.css";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../../ui/icons/social-links";
import {
  BodyWhiteAnimText,
  TitleWhiteAnimText,
} from "../../ui/typography/animation";
import {
  ResponsiveContainer,
  ContainerSeparator,
  Img,
  ImgContainer,
  SocialsLink,
  ButtonContainer,
  InfoContainer,
  TextContainer,
} from "./styled";
import styled from "styled-components";
export function HomePage() {
  const { push } = useRouter();
  const Container = styled.div`
    overflow: auto;
    height: 100vh;
    background: url("https://res.cloudinary.com/dmycj7gmx/image/upload/v1668456564/ayuda-ciudadana/blackground_jq9ge5.png");
    background-size: cover;
    background-blend-mode: soft-light;
    background-color: #000000ab;
  `;

  return (
    <Container>
      <div>
        <ContainerSeparator>
          <TextContainer>
            <TitleWhiteAnimText>AYUDA CIUDADANA</TitleWhiteAnimText>
            <InfoContainer>
              <BodyWhiteAnimText>
                Calles en mal estado, <q>Ayuda ciudadana </q> se dirije a los
                ciudadanos argentinos afectados por esta problematica, reune
                tanto personas con automoviles que no pueden transitar sin el
                miedo de romper algun componente del vehiculo al estar en tan
                mal estado las calles , como también personas que trabajan con
                un carro para recojer diversos materiales ya que sus carros se
                suelen estancar en los grandes hoyos del asfalto.
              </BodyWhiteAnimText>
            </InfoContainer>
          </TextContainer>
        </ContainerSeparator>
        <ResponsiveContainer>
          <div>
            <ButtonContainer onClick={() => push("/about-us")}>
              <CalltoActionButton>Más información</CalltoActionButton>
            </ButtonContainer>
            <div className={styles.links_nav}>
              <SocialsLink>
                <LinkedinIcon />
                <GithubIcon />
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
              </SocialsLink>
            </div>
          </div>
          <ImgContainer>
            <Img
              src="https://res.cloudinary.com/dmycj7gmx/image/upload/v1668462854/ayuda-ciudadana/1668221154221_1_paie2w.png"
              alt=""
            />
          </ImgContainer>
        </ResponsiveContainer>
      </div>
    </Container>
  );
}
