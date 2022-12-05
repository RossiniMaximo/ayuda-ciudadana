import styled from "styled-components";

export const ContainerErrorCode = styled.div`
  margin: 5px;
  position: relative;
  z-index: 2;
  color: white;
`;

export const ErrorCode = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #eee;
  border-left-width: 5px;
  border-radius: 3px;
  margin: 10px auto;
  font-size: 14px;
  border-left-color: #d9534f;
  background-color: rgba(217, 83, 79, 0.1);
  & > strong {
    color: #d9534f;
  }
`;

export const ContainerSuccessCode = styled(ContainerErrorCode)``;

export const SuccessCode = styled(ErrorCode)`
  border-left-color: #25ae28;
  background-color: rgba(0, 179, 4, 0.1);
  & > strong {
    color: lime;
  }
`;
