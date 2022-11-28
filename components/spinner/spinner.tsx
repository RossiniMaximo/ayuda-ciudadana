import styles from "./spinner.module.css";
import { RotatingLines } from "react-loader-spinner";

export function Spinner() {
  return (
    <RotatingLines
      strokeColor="white"
      strokeWidth="5"
      animationDuration="0.75"
      width="30"
      visible={true}
    />
  );
}
