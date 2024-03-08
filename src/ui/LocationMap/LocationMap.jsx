import { YMaps, Map, ZoomControl } from "@pbe/react-yandex-maps";
import s from "./LocationMap.module.scss"

export const LocationMap = () => (
  <YMaps>
    <div className={s.LocationMap}>
      <Map width="100%" height="500px" defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
        <ZoomControl />
      </Map>
    </div>
  </YMaps>
);
