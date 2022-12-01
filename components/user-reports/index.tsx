import styles from "./userReports.module.css";
import { useUserReports } from "../../lib/hooks";
import { ProfileReportsCard } from "../../ui/cards/profile/reportCard";
import { ReportProps } from "../../.d";

export function UserReports() {
  const userReports = useUserReports();

  return (
    <div className={styles.container}>
      {userReports?.map((r: ReportProps) => {
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
      })}
    </div>
  );
}
