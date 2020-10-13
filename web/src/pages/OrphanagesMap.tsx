import React from 'react';
import MapMarkerImg from '../images/map-marker.svg';
import { Link } from 'react-router-dom';

import { Map, TileLayer } from "react-leaflet";

import { FiPlus } from 'react-icons/fi';

import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';
function OrphanagesMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={MapMarkerImg} alt="Happy" />

                    <h2> Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visista :)</p>
                </header>

                <footer>
                    <strong>Pernambuco</strong>
                    <span>São José do Belmonte</span>
                </footer>
            </aside>

            <Map 
                center={[-7.8679297,-38.76323]}
                zoom={15}
                style={{ width: "100%", height: "100%"}}
            >
                <TileLayer 
                    url={'https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token='+ process.env.REACT_APP_MAPBOX_TOKEN} />
            </Map>

            <div>
                <Link to="" className="create-orphanage">
                    <FiPlus size={32} color='#fff'></FiPlus>
                </Link>
            </div>
        </div>
    );
}

export default OrphanagesMap;