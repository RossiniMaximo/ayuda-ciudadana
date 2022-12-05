import styled from "styled-components";

export const ContainerMain = styled.form`
  width: 100%;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  gap: 10vh;
  align-items: center;
`;

export const ContainerTitle = styled.div`
  padding: 10px;
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > hr {
    width: 100%;
  }
`;

export const SubcontainerTitle = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 500px;
`;

export const ContainerFirstSection = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-bottom: 50px;
`;

export const ContainerSecondSection = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 40px;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContainerHr = styled.div`
  width: 70%;
  max-width: 250px;
`;

export const ContainerTitleProfile = styled.div`
  display: flex;
  background-color: ${(props) => (props.theme === true ? "transparent" : "var(--secondary-color)")};
  border-radius: 10px;
  padding: 5px;
  align-items: center;
`;

export const Divider = styled.div`
  border-left: 3px solid var(--secondary-color);
  height: 40px;
`;

export const ContainerTitleOrders = styled.div`
  display: flex;
  background-color: ${(props) => (props.theme === true ? "var(--secondary-color)" : "transparent")};
  border-radius: 10px;
  padding: 5px;
  align-items: center;
  gap: 5px;
`;

export const ContainerProfileMain = styled.div`
  border-radius: 10px;
  width: 90vw;
  max-width: 400px;
`;

export const ContainerFileds = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ContainerOrders = styled.div`
  width: 90vw;
  max-width: 500px;
  background-color: #ecf0f1;
  box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export const ContainerAllOrders = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6vh;
`;

export const OrdersNotFound = styled.div`
  height: 55vh;
  text-align: center;
`;

export const OrderEl = styled.div`
  width: 100%;
  gap: 10px;
  background-color: rgb(205, 208, 208);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const ContainerOrderStatus = styled.div`
  background-color: ${(props) => (props.theme === "paid" ? "rgb(38, 206, 48)" : "#ff8f00")};
  border-radius: 5px;
  text-align: center;
`;

export const ContainerOrderInfo = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  border-radius: 5px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;

export const ContainerOrderName = styled.div`
  width: 60;
  height: 60px;
  background-color: white;
  borderradius: 50%;
`;

export const OrderName = styled.div`
  width: 70%;
`;

export const ContainerQuantity = styled.div`
  background-color: #262626;
  border-radius: 5px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-left: 40px;
`;

export const Img = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
`;

export const ContainerImg = styled.div`
  background-color: white;
  border-radius: 10px;
`;
