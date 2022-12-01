import styles from "./report.module.css";
import Image from "next/image";
import { UserReportsProps } from "../..//../.d";
import { useRouter } from "next/router";

export function ProfileReportsCard(props: UserReportsProps) {
  const router = useRouter();
  console.log(props);

  return (
    <div
      className={styles.main_container}
      onClick={() => router.push("/map/" + props.id)}
    >
      <div className={styles.img_container}>
        <Image
          className={styles.img}
          src={props.image || ""}
          width={250}
          height={150}
          alt=""
        ></Image>
      </div>
      <div className={styles.bottom_content}>
        <div className={styles.info_container}>
          <div className={styles.info}>
            <p className={styles.label}>Localización</p>
            <p className={styles.data}>{props.title}</p>
          </div>
          <div className={styles.info}>
            <p className={styles.label}>Descripción</p>
            <p className={styles.data}>{props.description}</p>
          </div>
          <div className={styles.info}>
            <p className={styles.label}>Estado</p>
            <p className={styles.data}>{props.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
