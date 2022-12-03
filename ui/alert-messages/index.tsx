import { ContainerErrorCode, ContainerSuccessCode, ErrorCode, SuccessCode } from "./styled";
interface Props {
  children: string;
}

function ErrorMessage({ children }: Props) {
  return (
    <ContainerErrorCode>
      <ErrorCode>
        <strong>Error</strong> - {children}
      </ErrorCode>
    </ContainerErrorCode>
  );
}

function SuccessMessage({ children }: Props) {
  return (
    <ContainerSuccessCode>
      <SuccessCode>
        <strong>Completado</strong> - {children}
      </SuccessCode>
    </ContainerSuccessCode>
  );
}

export { ErrorMessage, SuccessMessage };
