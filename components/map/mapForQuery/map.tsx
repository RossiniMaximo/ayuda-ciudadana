import "leaflet/dist/leaflet.css";
import styles from "../map.module.css";
import { MapContainer, TileLayer, Popup, Marker, useMap } from "react-leaflet";
import { useState, useEffect } from "react";
import { SearchLocation } from "../../searchForm";
import { Icon } from "leaflet";
import { MapIcon, CrossIcon } from "../../../ui/icons";
import { ReportCard } from "../../../ui/cards/report_card";
import { ReportProps } from "../../../.d";
import { getAllReports } from "../../../lib/api-calls";
import { PopupComp } from "../../../ui/popup";
import { useIsEditCard } from "../../../lib/hooks";
import { EditReport } from "../../editReport";

const icon = new Icon({
  iconUrl: "/maintenance.png",
  iconSize: [25, 25],
});

function MoveMaker({ lat, lng }: any) {
  const map = useMap();
  if (lat != undefined && lng != undefined) {
    map.flyTo([lat, lng]);
    return null;
  } else {
    return null;
  }
}

const Map = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  const [isEditMap, setIsEditMap] = useIsEditCard();
  const [lat, setLat] = useState(-34.57879931934594);
  const [lng, setLng] = useState(-58.42633754889879);
  const [reports, setReports] = useState<any[]>([]);
  const [activeReport, setActiveReport] = useState(null) as any;
  const [isActiveMap, setIsActiveMap] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  async function pullReports() {
    const reports = await getAllReports();
    setReports(reports);
  }

  useEffect(() => {
    pullReports();
    setLat(latitude);
    setLng(longitude);
  }, []);

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
        {reports.map((r: ReportProps) => {
          return (
            <div key={r.id}>
              <Marker
                eventHandlers={{}}
                position={[r.latitude, r.longitude]}
                icon={icon}
              >
                <Popup position={[r.latitude, r.longitude]}>
                  <ReportCard
                    title={r.title}
                    id={r.id}
                    latitude={r.latitude}
                    longitude={r.longitude}
                    description={r.description}
                    image={r?.image}
                    status={r.status}
                    UserId={r.UserId}
                    onDelete={(reportId: number) => {
                      let newArr = [...reports];
                      const report = reports.find((r: ReportProps) => {
                        if (r.id == reportId) {
                          return r;
                        }
                      });
                      const index = reports.indexOf(report);
                      if (index > -1) {
                        newArr.splice(index, 1);
                        setIsDeleted(true);
                        setReports(newArr);
                      }
                    }}
                  />
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
      {isCreated ? (
        <div className={styles.popup_container}>
          <PopupComp
            text="Reporte creado exitosamente."
            buttonText="cerrar"
            onClickEvent={() => setIsCreated(false)}
          />
        </div>
      ) : (
        ""
      )}

      {isDeleted ? (
        <div className={styles.popup_container}>
          <PopupComp
            text="Reporte eliminado satisfactifactoriamente."
            buttonText="cerrar"
            onClickEvent={() => setIsDeleted(false)}
          />
        </div>
      ) : (
        ""
      )}

      {!isActiveMap ? (
        <div
          className={styles.map_icon_container}
          onClick={() => setIsActiveMap(true)}
        >
          <MapIcon size={40} color="black" />
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
              img: any,
              title: string,
              UserId: number,
              status: string
            ) => {
              setLat(lat);
              setLng(lon);
              setReports([
                ...reports,
                {
                  title,
                  latitude: lat,
                  longitude: lon,
                  description,
                  image: img,
                  UserId,
                  status,
                },
              ]);
              setIsCreated(true);
              setIsActiveMap(false);
            }}
          />
        </div>
      ) : (
        ""
      )}
      {isEditMap ? (
        <EditReport
          onUpdate={(editedReport) => {
            reports.find((r: ReportProps) => {
              if (r.id == editedReport.id) {
                r.image = editedReport.image;
                r.description = editedReport.description;
                r.status = editedReport.status;
                setReports([...reports, r]);
              }
            });
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Map;
