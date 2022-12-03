import { removeToken, useGetToken } from "lib/hooks";
import { useRouter } from "next/router";
import styles from "./menu.module.css";

export function HamburgerMenu({ loginModal }: any) {
  const { push } = useRouter();
  const token = useGetToken();

  return (
    <div className={styles.container}>
      <input type="checkbox" name="" id="check" className={styles.check} />
      <ul className={styles["menu-items"]}>
        <li>
          <a onClick={() => push("/")}>Inicio</a>
        </li>
        <li>
          <a onClick={() => push("/more-info")}>Nuestra propuesta</a>
        </li>
        <li>
          <a onClick={() => push("/contact-us")}>Suscribite</a>
        </li>
        {token.email ? (
          <div>
            <li>
              <a onClick={() => push("/my-profile")}>Mi perfil</a>
            </li>
            <li>
              <a onClick={() => push("/map")}>Mapa</a>
            </li>
            <hr className={styles.separator} />
            <div onClick={() => removeToken()}>
              <p className={styles.logout}>cerrar sesión</p>
              <p className={styles.email}>{token.email}</p>
            </div>
          </div>
        ) : (
          <div>
            <hr className={styles.separator} />
            <li>
              <a onClick={() => loginModal(true)}>Ingresar</a>
            </li>
          </div>
        )}
      </ul>
      <label htmlFor="check" className={styles["ham-menu"]}>
        <span className={`${styles["line"]} ${styles["line1"]}`} />
        <span className={`${styles["line"]} ${styles["line2"]}`} />
        <span className={`${styles["line"]} ${styles["line3"]}`} />
      </label>
    </div>
  );
}
