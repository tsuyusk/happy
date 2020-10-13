import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import styles from '../styles/pages/landing.module.scss';
import logoImg from '../assets/Logo.svg';

const Landing: React.FC = () => {
  return (
    <div id={styles.page_loading}>
      <div className={styles.content_wrapper}>
        <img src={logoImg} alt="Logo" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className={styles.location}>
          <strong>Belo Horizonte</strong>
          <span>Minas gerais</span>
        </div>

        <Link to="/app" className={styles.enter_app}>
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
  );
};

export default Landing;
