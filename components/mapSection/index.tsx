import dynamic from "next/dynamic";

export function VideoScene() {
  const Map = dynamic(
    () => import("../map"), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  ) as any;
  return (
    <div>
      <div id="map">
        <Map />
      </div>
    </div>
  );
}
