import { useRouter } from "next/router";
import { CalltoActionButton } from "../../ui/buttons";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../../ui/icons/social-links";
import { BodyWhiteText, TitleWhiteText } from "../../ui/typography";
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
export function HomePage() {
  const { push } = useRouter();

  return (
    <div>
      <ContainerSeparator>
        <TextContainer>
          <TitleWhiteAnimText>AYUDA CIUDADANA</TitleWhiteAnimText>
          <InfoContainer>
            <BodyWhiteAnimText>
              Calles en mal estado, "Ayuda ciudadana" se dirije a los ciudadanos
              argentinos afectados por esta problematica, reune tanto personas
              con automoviles que no pueden transitar sin el miedo de romper
              algun componente del vehiculo al estar en tan mal estado las
              calles , como también personas que trabajan con un carro para
              recojer diversos materiales ya que sus carros se suelen estancar
              en los grandes hoyos del asfalto.
            </BodyWhiteAnimText>
          </InfoContainer>
        </TextContainer>
      </ContainerSeparator>
      <ResponsiveContainer>
        <div>
          <ButtonContainer onClick={() => push("/more-info")}>
            <CalltoActionButton>Más información</CalltoActionButton>
          </ButtonContainer>
          <SocialsLink>
            <LinkedinIcon />
            <GithubIcon />
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </SocialsLink>
        </div>
        <ImgContainer>
          <Img
            src="https://res.cloudinary.com/dmycj7gmx/image/upload/v1668462854/ayuda-ciudadana/1668221154221_1_paie2w.png"
            alt=""
          />
        </ImgContainer>
      </ResponsiveContainer>
    </div>
  );
}
