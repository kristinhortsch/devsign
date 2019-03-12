import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalContainerChirp from '../containers/ModalContainerChirp';
import styles from '../css/Header.css';

export default function Header() {
  return (
    <header>
      <h1 className={styles.warble}>Warble</h1>
      <nav className={styles.nav}>
        <Link to="/home">
          <FontAwesomeIcon icon="home" className={styles.home}/>
        </Link>
        
        <ModalContainerChirp />
        
        <img src="../assets/logo.png" width="40px" alt="logo"/>
        <input type="text" placeholder="Search" name="search" />
        <Link to="/profile"><img src="../assets/prof-pic.png" width="40px" alt="prof pic logo"/></Link>
      </nav>
    </header>
  );
}
  
  



