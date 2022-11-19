import "leaflet/dist/leaflet.css";

import styles from "./map.module.css";
import { MapContainer, TileLayer, Popup, Marker, useMap } from "react-leaflet";
import { useState } from "react";
import { SearchLocation } from "../searchForm";
import { Icon } from "leaflet";
import Image from "next/image";
import { MapIcon, CrossIcon } from "../../ui/icons";

const icon = new Icon({
  iconUrl: "/maintenance.png",
  iconSize: [25, 25],
});

function MoveMaker({ lat, lng }: any) {
  const map = useMap();
  map.flyTo([lat, lng]);
  return null;
}

const Map = () => {
  const [lat, setLat] = useState(-34.57879931934594);
  const [lng, setLng] = useState(-58.42633754889879);
  const [reports, setReports] = useState([]) as any;
  const [activeReport, setActiveReport] = useState(null) as any;
  const [isActiveMap, setIsActiveMap] = useState(false);

  /* 
  useEffect(()=>{
    fetch reportes
    {lat,lon} extraer coords
    setCoords([...cords,{lat,long}])
  },[])
*/

  function popupOnClick() {
    setActiveReport(false);
  }
  return (
    <div className={styles.map_container}>
      <MapContainer
        center={[lat, lng]}
        zoom={12}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%", position: "fixed" }}
      >
        <MoveMaker lat={lat} lng={lng} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {reports.map((report: any) => {
          return (
            <div key={report}>
              <Marker
                eventHandlers={{}}
                position={[report.lat, report.lon]}
                icon={icon}
              >
                <Popup position={[report.lat, report.lon]}>
                  <div className={styles.report_content}>
                    <h4 className={styles.report_description}>
                      {report.description}
                    </h4>
                    <Image
                      src={report.img.img}
                      alt=""
                      height={100}
                      width={250}
                      className={styles.report_image}
                    />
                  </div>
                </Popup>
              </Marker>
            </div>
          );
        })}

        {activeReport ? (
          <div>
            <Popup
              eventHandlers={{ click: popupOnClick }}
              position={[activeReport.lat, activeReport.lon]}
            >
              <div>
                <h2>{activeReport.description}</h2>
              </div>
            </Popup>
          </div>
        ) : (
          ""
        )}
      </MapContainer>
      {!isActiveMap ? (
        <div
          style={{
            position: "absolute",
            right: "10px",
            top: "20px",
            cursor: "pointer",
          }}
          onClick={() => setIsActiveMap(true)}
        >
          <MapIcon size={40} color="var(--buttonColor)" />
        </div>
      ) : (
        ""
      )}
      {isActiveMap ? (
        <div className={styles.search_form__container}>
          <div
            className={styles.cross_icon}
            onClick={() => setIsActiveMap(false)}
          >
            <CrossIcon size={20} />
          </div>
          <SearchLocation
            onChange={(
              lat: number,
              lon: number,
              description: string,
              img: string
            ) => {
              setLat(lat);
              setLng(lon);
              setReports([...reports, { lat, lon, description, img }]);
              setIsActiveMap(false);
            }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Map;
{
  /*  
  iterar reportes para poner marks

   {reports.map((report: any) => {
          return (
            <div onClick={()=>{
              setActiveReport(report)
            }}>
              <Marker position={[report.lat, report.lon]} icon={icon}></Marker>;
            </div>
          );
        })} */
}
