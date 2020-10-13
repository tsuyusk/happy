import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import LogoSmile from '../assets/logo-smile.svg';
import styles from '../styles/pages/orphanages-map.module.scss';

const OrphanagesMap: React.FC = () => {
  return (
    <div id={styles.page_map}>
      <aside>
        <header>
          <img src={LogoSmile} alt="Happy" />
          <h2>Escolha um orfanato</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Belo Horizonte</strong>
          <span>Minas gerais</span>
        </footer>
      </aside>

      <Map
        center={[-19.8026723, -43.953214]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        {process.env.REACT_APP_MAPBOX_TOKEN ? (
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
        ) : (
          <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        )}
      </Map>

      <Link to="" className={styles.create_orphanage}>
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
};

export default OrphanagesMap;
