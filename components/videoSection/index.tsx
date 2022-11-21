import styles from "./videosection.module.css";
import Img from "../../public/video_section_img.png";
import Image from "next/image";
import { default as _ReactPlayer } from "react-player/lazy";
import { FormButton } from "../../ui/buttons";
import { ReactPlayerProps } from "react-player/types/lib";
const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export function VideoSection() {
  const router = useRouter();
  const [isWindow, setIsWindow] = useState(false);

  useEffect(() => {
    setIsWindow(true);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.first_half}>
        <div className={styles.text_container}>
          <h4 className={styles.text_title}>Características de reporte</h4>
          <p className={styles.text}>
            A continuación además del vídeo comentando las características y
            profundizando sobre el funcionamiento de reporte, agregaremos un
            pequeño listando de las características más importantes que contamos
            en nuestro sistema de reportes.
          </p>
        </div>
        <div className={styles.caracteristics_container}>
          <p className={styles.caracteristic}>Crea un reporte geolocalizado</p>
          <p className={styles.caracteristic}>Adjuntale una descripción</p>
          <p className={styles.caracteristic}>Adjuntale una imagen</p>
          <p className={styles.caracteristic}>Inspecciona sus reportes</p>
          <p className={styles.caracteristic}>Inspecciona reportes ajenos</p>
        </div>
      </div>
      <div className={styles.second_half}>
        <div className={styles.video_container}>
          {isWindow ? (
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              controls
              url={"https://www.youtube.com/watch?v=DCVdn1l-JTM"}
            />
          ) : (
            ""
          )}
        </div>
        <div className={styles.image_container}>
          <Image src={Img} alt="" height={200} width={350} />
        </div>
      </div>
      <div className={styles.btn_container}>
        <FormButton event={() => router.push("#form")}>Suscribete</FormButton>
      </div>
    </div>
  );
}
