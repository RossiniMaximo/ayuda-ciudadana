import styles from "./styles.module.css";
export function Loader() {
  return (
    <div className={styles.container}>
      <span className={styles.loader} />
    </div>
  );
}

export function LoaderSecond() {
  return (
    <div className={styles["container-secondary"]}>
      <span className={styles["loader-secondary"]} />
    </div>
  );
}
