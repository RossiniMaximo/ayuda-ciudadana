import Link from "next/link";
import styles from "./layout.module.css";
import { HamburguerMenu } from "../../ui/icons";
import { useState, useEffect } from "react";

type layoutProps = {
  children: any;
  links: any;
};

export function Layout(props: layoutProps) {
  const [isActive, setIsActive] = useState(false);

  const style = isActive ? { rotate: "90deg" } : {};

  return (
    <div className={styles.container}>
      <div className={styles.low_res_content}>
        <header
          className={styles.low_res_header}
          onClick={() => setIsActive(!isActive)}
        >
          <p className={styles.logo}>DINT</p>
          <HamburguerMenu size={40} style={style} color="ffffff" />
          {isActive ? (
            <div className={styles.low_res_menu}>
              <nav className={styles.links_container}>
                <Link href={"#" + props.links.firstLink}>Inicio</Link>
                <Link href={"#" + props.links.secondLink}>
                  Nuestra propuesta
                </Link>
                <Link href={"#" + props.links.thirdLink}>Suscribite</Link>
                <p
                  style={{ color: "white" }}
                  onClick={() => setIsActive(false)}
                >
                  Volver
                </p>
              </nav>
            </div>
          ) : (
            ""
          )}
        </header>
      </div>
      <div className={styles.high_res_content}>
        <header className={styles.header}>
          <div className={styles.left_half}>
            <p className={styles.logo}>DINT</p>
            <nav className={styles.nav}>
              <Link className={styles.link} href={"#" + props.links.firstLink}>
                Inicio
              </Link>
              <Link className={styles.link} href={"#" + props.links.secondLink}>
                Nuestra propuesta
              </Link>
              <Link className={styles.link} href={"#" + props.links.thirdLink}>
                Suscribete
              </Link>
            </nav>
          </div>
          <div className={styles.right_half}>
            <p className={styles.login}>Iniciar sesión</p>
            <div className={styles.btn_container}>
              <button className={styles.btn}>Registrarse</button>
            </div>
          </div>
        </header>
      </div>
      {props.children}
    </div>
  );
}
