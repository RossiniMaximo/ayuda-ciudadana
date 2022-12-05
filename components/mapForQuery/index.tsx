import dynamic from "next/dynamic";

export function DynamicMapForQuery({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) {
  const Map = dynamic(() => import("./map"), { ssr: false }) as any;
  return (
    <div>
      <div id="map">
        <Map latitude={latitude} longitude={longitude} />
      </div>
    </div>
  );
}
