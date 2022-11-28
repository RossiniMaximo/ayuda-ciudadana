import styles from "./editReport.module.css";
import { useState } from "react";
import { storage } from "../../lib/firestore";
import { updateAReport } from "../../lib/api-calls";
import { useEditCardId, useIsEditCard } from "../../lib/hooks";
import { EditReportProps, ReportProps } from "../../.d";
import { CrossIcon } from "../../ui/icons";

export function EditReport(props: EditReportProps) {
  const [img, setImg] = useState(null) as any;
  const [imgUrl, setImgUrl] = useState(null) as any;
  const [progress, setProgress] = useState(null) as any;
  const [cardId, setCardId] = useEditCardId();
  const [isEditMap, setIsEditMap] = useIsEditCard();

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
        setImgUrl(url);
      }
    );
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    const newDescription = e.target.description.value;
    const status = e.target.status.value;
    if (cardId != undefined) {
      const update = await updateAReport(
        cardId,
        newDescription,
        imgUrl,
        status
      );
      props.onUpdate(update);
    }
    setIsEditMap(false);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.cross_container}>
        <div className={styles.cross} onClick={() => setIsEditMap(false)}>
          <CrossIcon size={20} />
        </div>
      </div>
      <div className={styles.fields_container}>
        <label className={styles.description_label}>
          Nueva descripción
          <textarea
            name="description"
            className={styles.description_textarea}
          ></textarea>
          <div className={styles.select_container}>
            <p className={styles.select_title}>Estado</p>
            <select className={styles.select} name="status">
              <option value="maintenance">En mantenimiento...</option>
              <option value="repaired">Arreglado.</option>
            </select>
          </div>
        </label>
        <label className={styles.file_label} htmlFor="input_file">
          Selecciona un archivo
          <input
            style={{ display: "none" }}
            id="input_file"
            name="image"
            type="file"
            onChange={handleChange}
          />
        </label>
        <div className={styles.progress_bar__container}>
          <progress
            className={styles.progress_bar}
            max="100"
            value={progress}
          />{" "}
          <p>{progress} %</p>
        </div>
        <div className={styles.btn_container}>
          <button type="button" onClick={handleUpload} className={styles.btn}>
            Cargar archivo
          </button>
        </div>
      </div>
      <div className={styles.form_btn_container}>
        <button className={styles.form_btn}>Actualizar</button>
      </div>
    </form>
  );
}
