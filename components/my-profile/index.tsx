import React, { useEffect, useState } from "react";
import { Profile } from "./profile";
import { useGetToken } from "lib/hooks";
import { SuccessMessage } from "ui/alert-messages";
import { LargeBoldText, LargeBoldWhiteText } from "ui/typography";
import { getUserInfo, updateUserInfo } from "lib/api";
import { ReportsBlackIcon, ReportsIcon, PerfilBlackIcon, PerfilIcon } from "ui/icons/user";
import {
  ContainerMain,
  ContainerTitle,
  ContainerTitleOrders,
  ContainerTitleProfile,
  Divider,
  SubcontainerTitle,
} from "./styled";
import { Reports } from "./reports";

interface FormType extends HTMLFormElement {
  full_name: HTMLInputElement;
  email: HTMLInputElement;
}

function MyProfile() {
  const token = useGetToken();
  const [info, setInfo] = useState({} as any);
  const [reports, setReports] = useState(false);
  const [anim, setAnim] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (token?.token) {
      getUserInfo().then((r: any) => {
        setInfo(r);
      });
    }
  }, [token]);

  async function onSubmitForm(e: React.FormEvent) {
    e.preventDefault();
    const form: FormType = e.target as FormType;
    const name = form.full_name.value;
    setAnim(true);
    const resUserInfo = await updateUserInfo(name);

    if (!resUserInfo) {
      setSuccess(false);
    } else {
      setSuccess(true);
    }
    window.scrollTo(0, 0);
    setAnim(false);
  }

  return (
    <ContainerMain onSubmit={onSubmitForm}>
      <ContainerTitle>
        <SubcontainerTitle>
          <ContainerTitleProfile theme={reports} onClick={() => setReports(false)}>
            {reports ? <PerfilBlackIcon /> : <PerfilIcon />}
            {reports ? (
              <LargeBoldText>Mis Datos</LargeBoldText>
            ) : (
              <LargeBoldWhiteText>Mis Datos</LargeBoldWhiteText>
            )}
          </ContainerTitleProfile>

          <Divider />
          <ContainerTitleOrders
            onClick={() => {
              setSuccess(false);
              setReports(true);
            }}
            theme={reports}
          >
            {reports ? <ReportsIcon /> : <ReportsBlackIcon />}
            {reports ? (
              <LargeBoldWhiteText>Mis Reportes</LargeBoldWhiteText>
            ) : (
              <LargeBoldText>Mis Reportes</LargeBoldText>
            )}
          </ContainerTitleOrders>
        </SubcontainerTitle>
        <hr />
      </ContainerTitle>
      {success ? (
        <SuccessMessage>Los datos han sido actualizado correctamente.</SuccessMessage>
      ) : null}
      {reports ? <Reports /> : <Profile anim={anim} info={info} email={token?.email} />}
    </ContainerMain>
  );
}

export { MyProfile };
