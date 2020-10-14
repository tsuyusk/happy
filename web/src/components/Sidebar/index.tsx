import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import mapMarkerImg from '../../assets/logo-smile.svg';
import styles from '../../styles/components/sidebar.module.scss';

const Sidebar: React.FC = () => {
  const { goBack } = useHistory();
  return (
    <aside className={styles.appSidebar}>
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </aside>
  );
};

export default Sidebar;
