import Link from "next/link";
import styles from "./layout.module.css";
import { HamburguerMenu } from "../../ui/icons";
import { useState, useEffect } from "react";

export function Layout({ children }: any) {
  const [isActive, setIsActive] = useState(false);

  const style = isActive ? { rotate: "90deg" } : {};

  return (
    <div className={styles.container}>
      <div className={styles.low_res_content}>
        <header className={styles.low_res_header}>
          <p className={styles.logo}>DINT</p>

          {isActive ? (
            <div className={styles.low_res_menu}>
              <nav className={styles.links_container}>
                <Link onClick={() => setIsActive(false)} href="/home">
                  Inicio
                </Link>
                <Link onClick={() => setIsActive(false)} href="/about-us">
                  Nuestra propuesta
                </Link>
                <Link onClick={() => setIsActive(false)} href="/contact-us">
                  Suscribite
                </Link>
              </nav>
              <div onClick={() => setIsActive(false)}>
                <HamburguerMenu size={40} style={style} color="black" />
              </div>
            </div>
          ) : (
            <div onClick={() => setIsActive(!isActive)}>
              <HamburguerMenu size={40} style={style} color="ffffff" />
            </div>
          )}
        </header>
      </div>
      <div className={styles.high_res_content}>
        <header className={styles.header}>
          <div className={styles.left_half}>
            <p className={styles.logo}>DINT</p>
            <nav className={styles.nav}>
              <Link className={styles.link} href="/home">
                Inicio
              </Link>
              <Link className={styles.link} href="/about-us">
                Nuestra propuesta
              </Link>
              <Link className={styles.link} href="/contact-us">
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
      {children}
    </div>
  );
}
