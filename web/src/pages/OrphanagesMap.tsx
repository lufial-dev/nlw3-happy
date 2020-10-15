import React, { useEffect, useState } from 'react';
import MapMarkerImg from '../images/map-marker.svg';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import '../styles/pages/orphanages-map.css';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';

interface Orphanage{
    id: number,
    latitude: number,
    longitude: number,
    name: string
}

function OrphanagesMap(){
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    console.log(orphanages);

    useEffect(()=>{
        api.get('orphanages').then( response =>{
           setOrphanages(response.data);
        });
    }, []);

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
                
                {orphanages.map(orphanage => {
                    return(
                        <Marker 
                            position= {[orphanage.latitude , orphanage.longitude]}
                            icon = {mapIcon}
                            key = {orphanage.id}
                        >
                            
                            <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup'>
                                {orphanage.name}
                                <Link to={'orphanages/'+orphanage.id}>
                                    <FiArrowRight size={20} color="#FFF" />
                                </Link>
                            </Popup>

                        </Marker>
                    );
                })}
            </Map>

            <div>
                <Link to="/orphanages/create" className="create-orphanage">
                    <FiPlus size={32} color='#fff'></FiPlus>
                </Link>
            </div>
        </div>
    );
}

export default OrphanagesMap;