import { useEffect, useState } from "react";
import { getReportById } from "../../lib/api-calls";
import { DynamicMapForQuery } from "../mapForQuery";

export function HandleQueryMapComp(reportId: any) {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  async function pullReport() {
    if (reportId.reportId != undefined) {
      console.log(reportId.reportId);
      const report = await getReportById(reportId.reportId);
      setLat(report.latitude);
      setLng(report.longitude);
    }
  }

  useEffect(() => {
    pullReport();
  }, [reportId.reportId]);

  return (
    <div>
      <DynamicMapForQuery latitude={lat} longitude={lng} />
    </div>
  );
}
