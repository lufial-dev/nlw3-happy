import Leaflet from 'leaflet';
import MapMarkerImg from "../images/map-marker.svg";

const mapIcon = Leaflet.icon({
    iconUrl : MapMarkerImg,
    iconSize: [50, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

export default mapIcon;