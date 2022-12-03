import styles from "./user-reports.module.css";
import { useUserReports } from "../../lib/hooks";
import { ProfileReportsCard } from "../../ui/cards/profile/reportCard";
import { ReportProps } from "../../.d";
import { LargeBoldWhiteText } from "ui/typography";
import { LoaderSecond } from "ui/loader";

export function Reports() {
  const userReports = useUserReports();

  return (
    <div className={styles.container}>
      {userReports ? (
        userReports?.message.length ? (
          userReports.message.map((r: ReportProps) => {
            return (
              <ProfileReportsCard
                key={r.id}
                id={r.id}
                title={r.title}
                description={r.description}
                status={r.status}
                image={r.image}
              />
            );
          })
        ) : (
          <div className={styles.not_found_container}>
            <LargeBoldWhiteText>Aún no haz realizado reportes</LargeBoldWhiteText>
          </div>
        )
      ) : (
        <LoaderSecond />
      )}
    </div>
  );
}
