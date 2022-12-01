import { HandleQueryMapComp } from "../../components/handleQueryMap";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function handleQueryMap() {
  const router = useRouter();
  const reportId = router.query.reportId;
  const [query, setQuery] = useState("") as any;

  useEffect(() => {
    if (router.query.reportId != undefined) {
      setQuery(reportId);
    }
  }, [reportId]);

  return <HandleQueryMapComp reportId={query} />;
}
