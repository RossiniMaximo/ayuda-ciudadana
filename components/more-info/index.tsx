import { ShapeImage } from "../../ui/shape";
import { FormButton } from "../../ui/buttons";
import {
  BodyWhiteAnimText,
  SubtitleWhiteAnimText,
} from "../../ui/typography/animation";
import {
  ContainerVideoText,
  ContainerNextPage,
  ContainerImages,
  Container,
  ContainerAllTexts,
  ContainerText,
} from "./styled";
import { useRouter } from "next/router";
import styled from "styled-components";

export function MoreInfo() {
  const { push } = useRouter();
  const urlsImages = [
    "https://res.cloudinary.com/dmycj7gmx/image/upload/v1668650393/ayuda-ciudadana/calle_1_n5ezen.jpg",
    "https://res.cloudinary.com/dmycj7gmx/image/upload/v1668650393/ayuda-ciudadana/calle_2_ewfiak.jpg",
    "https://res.cloudinary.com/dmycj7gmx/image/upload/v1668650394/ayuda-ciudadana/calle_3_zc5okw.jpg",
    "https://res.cloudinary.com/dmycj7gmx/image/upload/v1668650393/ayuda-ciudadana/calle_4_bzkain.jpg",
    "https://res.cloudinary.com/dmycj7gmx/image/upload/v1668650393/ayuda-ciudadana/calle_5_x16mhs.jpg",
    "https://res.cloudinary.com/dmycj7gmx/image/upload/v1668650393/ayuda-ciudadana/calle_6_qabop1.jpg",
  ];

  const MainContainer = styled.div`
    overflow: auto;
    height: 1100px;
    background: linear-gradient(90deg, #005aff, #0544b9, #001aff, #0603a3);
    background-size: 400% 400%;
    animation: gradient 6s ease infinite;

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

  return (
    <MainContainer>
      <Container>
        <ContainerAllTexts>
          <ContainerText>
            <SubtitleWhiteAnimText>Nuestra propuesta</SubtitleWhiteAnimText>
            <BodyWhiteAnimText>
              Buscamos darte una voz, que puedas realizar reportes de calles
              cerca de tu vecindario que se encuentran en mal estado. Nosotros
              nos encargamos de avisar a las autoridades correspondientes para
              que se encarguen de reparar dichas calles. Una vez hayamos
              recibido la confiramción de que la calle ha sido reparada,
              envíaremos un aviso a todas las personas que se interesaron en el
              reporte.
            </BodyWhiteAnimText>
          </ContainerText>
          <ContainerText>
            <SubtitleWhiteAnimText>
              ¿Cómo podrás reportar?
            </SubtitleWhiteAnimText>
            <BodyWhiteAnimText>
              Primeramente requerimos que te autentiques en nuestro sistema con
              un sencillo sistema de inicio de sesión, de esta manera podremos
              enfocarnos en la seriedad de tu reporte, luego obtendrás acceso a
              un mapa especializado para que puedas encontrar la calle con la
              problematica y realizar el reporte de manera sencilla e intuitiva.
            </BodyWhiteAnimText>
          </ContainerText>
        </ContainerAllTexts>
        <div style={{ paddingBottom: "20px" }}>
          <ContainerImages>
            {urlsImages.map((i) => (
              <ShapeImage url={i} key={i} />
            ))}
          </ContainerImages>
          <ContainerNextPage>
            <ContainerVideoText>
              <BodyWhiteAnimText>
                A continuación podrá visualizar el funcionamiento, además de una
                breve explicación de cómo funciona nuestro sistema de reportes.
              </BodyWhiteAnimText>
            </ContainerVideoText>
            <div onClick={() => push("#video")}>
              <FormButton>Ver vídeo</FormButton>
            </div>
          </ContainerNextPage>
        </div>
      </Container>
    </MainContainer>
  );
}
