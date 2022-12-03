import { AnimButton } from "ui/buttons";
import { SecondaryField } from "ui/fields";
import { LargeBoldWhiteText } from "ui/typography";
import {
  ContainerButton,
  ContainerFileds,
  ContainerFirstSection,
  ContainerHr,
  ContainerProfileMain,
} from "./styled";

interface Props {
  info: any;
  email: string | null;
  anim: boolean;
}

function Profile({ info, email, anim }: Props) {
  return (
    <ContainerProfileMain>
      <ContainerFirstSection>
        <LargeBoldWhiteText>Datos Principales</LargeBoldWhiteText>
        <ContainerHr>
          <hr />
        </ContainerHr>
        <ContainerFileds>
          <SecondaryField
            required={true}
            value={info?.message?.full_name}
            name="full_name"
            type="text"
          >
            Nombre
          </SecondaryField>
          <SecondaryField
            readonly={true}
            required={false}
            value={email || ""}
            name="email"
            type="text"
          >
            Correo eléctronico
          </SecondaryField>
        </ContainerFileds>
      </ContainerFirstSection>
      <ContainerButton>
        <AnimButton anim={anim}>ACTUALIZAR DATOS</AnimButton>
      </ContainerButton>
    </ContainerProfileMain>
  );
}

export { Profile };
