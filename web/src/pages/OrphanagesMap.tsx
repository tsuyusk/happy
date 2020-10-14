import React, { useState, useEffect } from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import LogoSmile from '../assets/logo-smile.svg';
import styles from '../styles/pages/orphanages-map.module.scss';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    async function loadData() {
      const { data } = await api.get('/orphanages');

      setOrphanages(data);
    }

    loadData();
  }, []);

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
        {orphanages.map(orphanage => (
          <Marker
            key={orphanage.id}
            icon={mapIcon}
            position={[orphanage.latitude, orphanage.longitude]}
          >
            <Popup
              minWidth={240}
              maxWidth={240}
              closeButton={false}
              className={styles.mapPopup}
            >
              {orphanage.name}
              <Link to={`/orphanage/${orphanage.id}`}>
                <FiArrowRight size={20} color="#fff" />
              </Link>
            </Popup>
          </Marker>
        ))}
      </Map>

      <Link to="/orphanages/create" className={styles.create_orphanage}>
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
};

export default OrphanagesMap;
