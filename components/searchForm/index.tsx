import { useEffect, useState } from "react";
import { storage } from "../../lib/firestore";
import { createAReport } from "../../lib/api-calls";
import styles from "./searchform.module.css";

export function SearchLocation(props: any) {
  const [img, setImg] = useState(null) as any;
  const [progress, setProgress] = useState(0);
  const [imgURL, setImgURL] = useState("");
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  async function handleSubmit(e: any) {
    e.preventDefault();
    const localization = e.target.localization.value;
    const description = e.target.description.value;

    if (localization == undefined || localization == "") {
      throw { error: "Se necesitan parametros de búsqueda" };
    }

    const res = await fetch(
      "https://us1.locationiq.com/v1/search.php?key=pk.bf4604bc2b3ea328e732de26a4387fa9&q=" +
        localization +
        "&format=json"
    );
    const data = await res.json();
    const { lat, lon } = data[0];
    setLat(lat);
    setLon(lon);

    const created = await createAReport(
      localization,
      description,
      imgURL,
      lat,
      lon
    );

    if (imgURL != "") {
      props.onChange(
        lat,
        lon,
        description,
        imgURL,
        localization,
        created.UserId,
        created.status
      );
    }
    return created;
  }

  async function handleChange(e: any) {
    if (e.target.files[0]) {
      const newImage = e.target.files[0];
      setImg(newImage);
    }
  }
  function handleUpload() {
    const uploadImg = storage.ref(`images/${img.name}`).put(img);
    uploadImg.on(
      "state_changed",
      (snapshot) => {
        // progress function...
        const currentProgress =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(currentProgress);
      },
      (error) => {
        console.error(error);
      },
      async () => {
        // completed function...
        const child = storage.ref("images").child(img.name);
        const url = await child.getDownloadURL();
        setImgURL(url);
      }
    );
  }

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.location_label}>
          Localización
          <input
            className={styles.location_input}
            type="text"
            name="localization"
            placeholder="Parque Alberti , La Plata , Argentina."
          />
        </label>
        <label className={styles.desription_label}>
          Descripción
          <textarea
            className={styles.description_text_area}
            name="description"
            id=""
            cols={30}
            rows={10}
            placeholder="Calle en muy mal estado , pozo profundo en mitad de la calle, coloque una madera para que no lo pisen..."
          ></textarea>
        </label>
        <label className={styles.image_label} htmlFor="image">
          Seleccionar imagen
          <input
            type="file"
            id="image"
            onChange={handleChange}
            style={{ display: "none" }}
          />
        </label>
        <div className={styles.bottom_content}>
          <div className={styles.progress_bar_container}>
            <progress
              className={styles.progress_bar}
              value={progress}
              max="100"
            />
            <p className={styles.progress_counter}>{progress + "%"}</p>
          </div>

          <div className={styles.load_img_btn__container}>
            <button
              className={styles.load_img_btn}
              type="button"
              onClick={handleUpload}
            >
              Cargar imagen
            </button>
          </div>
        </div>
        <div className={styles.search_btn_container}>
          <button className={styles.search_btn}>Buscar</button>
        </div>
      </form>
    </div>
  );
}
