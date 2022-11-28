import styles from "./popup.module.css";

type PopupProps = {
  text: string;
  buttonText: string;
  onClickEvent: () => any;
};

export function PopupComp(props: PopupProps) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{props.text}</p>
      <div className={styles.btn_container}>
        <button onClick={props.onClickEvent} className={styles.btn}>
          {props.buttonText}
        </button>
      </div>
    </div>
  );
}
