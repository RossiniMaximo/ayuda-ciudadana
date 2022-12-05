import { HandleQueryMapComp } from "components/handleQueryMap";
import { useGetToken } from "lib/hooks";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function HandleQueryMap() {
  const router = useRouter();
  const reportId = router.query.reportId;
  const [query, setQuery] = useState("") as any;
  const [isLoading, setIsLoading] = useState(true);
  const res = useGetToken();

  useEffect(() => {
    if (router.query.reportId != undefined) {
      setQuery(reportId);
    }

    if (!res.token && res.set) {
      router.push({ pathname: "/", query: "login" });
    } else {
      setIsLoading(false);
    }
  }, [res]);

  return <HandleQueryMapComp reportId={query} />;
}
