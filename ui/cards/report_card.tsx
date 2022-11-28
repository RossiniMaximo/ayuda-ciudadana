import styles from "./report_card.module.css";
import Image from "next/image";
import { useUserId } from "../../lib/hooks";
import { DeleteIcon, EditIcon } from "../icons";
import { ReportProps } from "../../.d";
import { deleteAReport } from "../../lib/api-calls";
import { useIsEditCard, useEditCardId } from "../../lib/hooks";

export function ReportCard(props: ReportProps) {
  const userId = useUserId();
  const [isEditCard, setIsEditCard] = useIsEditCard();
  const [cardToEditId, setCardToEditId] = useEditCardId();

  async function handleDelete() {
    const result = await deleteAReport(props.id);
    props.onDelete && result ? props.onDelete(props.id) : "";
  }

  return (
    <div className={styles.report_content}>
      <h6 className={styles.report_description}>{props.title}</h6>
      <h6 className={styles.report_description}>{props.description}</h6>
      <h6 className={styles.report_description}>Estado : {props.status}</h6>
      <Image
        src={props.image}
        alt=""
        height={100}
        width={250}
        className={styles.report_image}
      />

      {props.UserId == userId ? (
        <div className={styles.card_options_container}>
          <div className={styles.delete_icon_container} onClick={handleDelete}>
            <DeleteIcon size={15} />
          </div>
          <div
            className={styles.delete_icon_container}
            onClick={() => {
              setIsEditCard(true);
              setCardToEditId(props.id);
            }}
          >
            <EditIcon size={15} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
